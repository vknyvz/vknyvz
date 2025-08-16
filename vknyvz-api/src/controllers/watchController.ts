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
    const timezone = weatherData.timezone;

    const tempF = Math.ceil((temp - 273.15) * 9 / 5 + 32);
    const feelsF = Math.ceil((feels_like - 273.15) * 9 / 5 + 32);
    const tempC = Math.ceil(temp - 273.15);
    const feelsC = Math.ceil(feels_like - 273.15);

    const sunriseDate = new Date(sunrise * 1000);
    const sunsetDate = new Date(sunset * 1000);

    const format12 = (d: Date) =>
      d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })
        .replace("AM", "a")
        .replace("PM", "p");

    const format24 = (d: Date) =>
      d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });

    const sunrise12 = format12(sunriseDate);
    const sunset12 = format12(sunsetDate);
    const sunrise24 = format24(sunriseDate);
    const sunset24 = format24(sunsetDate);

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
      timezone,
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
