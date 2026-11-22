import express from "express";
import routes from "./routes"

const app = express();
const PORT = Number(process.env.PORT || 5000)

app.use("/", routes);

// On Vercel the default export runs as a function, so only listen for local dev and Docker.
if (!process.env.VERCEL) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`)
  });
}

export default app;
