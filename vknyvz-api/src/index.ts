import express from "express";
import routes from "./routes"
import path from "path";

const app = express();
const PORT = Number(process.env.PORT || 5000)

app.use(express.static(path.join(__dirname, "../public")));

app.use("/", routes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
});
