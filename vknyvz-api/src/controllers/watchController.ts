import { Request, Response } from "express";
import axios from "axios";
import fs from "fs";
import path from "path";

export const watchAPI = async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY

    const lat = parseFloat((req.query.lat as string) || "34.238741154824204");
    const lon = parseFloat((req.query.lon as string) || "-118.84287037487931");

    const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&exclude=minutely,hourly,daily,alerts`;
    const geoUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;

    const [weatherResp, geoResp] = await Promise.all([
      axios.get(weatherUrl),
      axios.get(geoUrl),
    ]);

    const weatherData = weatherResp.data;
    const geoData = geoResp.data;

    const city = geoData[0]?.name || "Unknown";

    const { sunrise, sunset, temp, feels_like, weather } = weatherData.current;

    const tzName: string | undefined = weatherData.timezone;
    const tzOffsetSec: number = weatherData.timezone_offset ?? 0;

    const tempF = Math.ceil((temp - 273.15) * 9 / 5 + 32);
    const feelsF = Math.ceil((feels_like - 273.15) * 9 / 5 + 32);
    const tempC = Math.ceil(temp - 273.15);
    const feelsC = Math.ceil(feels_like - 273.15);

    const formatTime = (unixSec: number, mode: "12" | "24") => {
      const optsBase: Intl.DateTimeFormatOptions = {
        hour: mode === "12" ? "numeric" : "2-digit",
        minute: "2-digit",
        hour12: mode === "12",
      };

      if (tzName) {
        try {
          const s = new Date(unixSec * 1000).toLocaleTimeString("en-US", {
            ...optsBase,
            timeZone: tzName,
          });
          return mode === "12" ? s.replace("AM", "a").replace("PM", "p") : s;
        } catch {
          // fall through to offset path
        }
      }

      const shifted = new Date((unixSec + tzOffsetSec) * 1000);
      const s = shifted.toLocaleTimeString("en-US", {
        ...optsBase,
        timeZone: "UTC",
      });
      return mode === "12" ? s.replace("AM", "a").replace("PM", "p") : s;
    };

    const sunrise12 = formatTime(sunrise, "12");
    const sunset12  = formatTime(sunset, "12");
    const sunrise24 = formatTime(sunrise, "24");
    const sunset24  = formatTime(sunset, "24");

    const now = Math.floor(Date.now() / 1000);
    let nextSunEvent = now < sunrise ? "Sunrise" : now < sunset ? "Sunset" : "Sunrise";

    const logFilePath = path.join(__dirname, "../../public/weather.txt");
    let logContents: string[] = [];

    if (fs.existsSync(logFilePath)) {
      logContents = fs.readFileSync(logFilePath, "utf-8").split("\n").filter(Boolean);
    }

    if (logContents.length >= 100) {
      logContents = [];
    }

    const logEntry = `${logContents.length + 1}. ${new Date().toISOString()} -- City: ${city} || Latitude: ${lat} || Longitude: ${lon}`;
    logContents.unshift(logEntry);

    fs.writeFileSync(logFilePath, logContents.join("\n"), "utf-8");

    return res.json({
      interval: 30,
      timezone: tzName ?? `UTC${tzOffsetSec >= 0 ? "+" : ""}${tzOffsetSec / 3600}`,
      location: { city },
      weather: {
        sunrise_12: sunrise12,
        sunset_12: sunset12,
        sunrise_24: sunrise24,
        sunset_24: sunset24,
        temp_f: String(tempF),
        feels_like_f: String(feelsF),
        temp_c: String(tempC),
        feels_like_c: String(feelsC),
        sun_event: nextSunEvent,
        data: {
          id: weather[0].id,
          main: weather[0].main,
          description: weather[0].description,
          icon: weather[0].icon,
        },
      },
    });
  } catch (e) {
    console.error(e);
    return res.json({});
  }
};