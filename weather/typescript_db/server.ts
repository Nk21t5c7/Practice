import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Country from "./models/Countries";
import { v2 as cloudinary } from "cloudinary";

const locations = require("./locations.json");
const axios = require("axios");

dotenv.config();
const port = process.env.PORT || 3098;
const app: express.Express = express();

const mongoUri = process.env.MONGODB as string;
mongoose.connect(mongoUri);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_URL, 
});

app.use(cors());
app.use(express.json());
const apiKey = process.env.WEATHER_API_KEY;
const nasaApi = process.env.NASA_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?`;

app.set("port", port);

app.post(
  "/current-weather",
  async (req: express.Request, res: express.Response) => {
    const result = await fetch(
      url + `lat=${req.body.lat}&lon=${req.body.long}&appid=${apiKey}`
    );
    if (result.status === 200) {
      const data = await result.json();
      // console.log(data);
      res.json(data);
    } else {
      console.log("error");
    }
  }
);

app.post("/insert-data", async (req: express.Request, res: express.Response) => {
  console.log(req.body);
  try {
    const data = req.body.data;
    const country = new Country({
      name: data["city"],
      country: data["country"],
      latitude: data["latitude"],
      longitude: data["longitude"],
      description: data["description"],
    });
    const result = await country.save();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(502).json("ERROR");
  }
});

app.get(
  "/place/description/:name",
  async (req: express.Request, res: express.Response) => {
    const { name } = req.params;
    const cityName = Object.keys(locations).find(
      (cityName) => cityName === name
    );
    if (!cityName) res.json({ error: "City not found" });
    if (cityName) {
      const cityCollection = mongoose.connection.collection("Countries");
      await cityCollection
        .findOne({ name: cityName })
        .then((result) => {
          console.log(result);
          res.json(result);
        })
        .catch((err) => {
          console.log(err);
          res.locals.error = err;
          res.status(404).send(err);
        });
    }
  }
);

app.post(
  "/place/:name",
  async (req: express.Request, res: express.Response) => {
    const { name } = req.params;
    const cityLocation = Object.keys(locations).find(
      (cityName) => cityName === name
    );
    // console.log(locations[cityLocation], cityLocation);
    if (!cityLocation) res.json({ error: "City not found" });

    // console.log(name, cityLocation);
    if (cityLocation) {
      await fetch(
        url +
          `lat=${locations[cityLocation]?.lat}&lon=${locations[cityLocation]?.lon}&appid=${apiKey}`
      )
        .then((result) => {
          // console.log(result);
          if (!result.ok) res.send("Error");
          return result.json();
        })
        .then((data) => {
          // console.log(data.name);
          res.json(data);
        })
        .catch((err) => {
          res.send(err);
        });
    }
  }
);

app.get("/cityWeather", (req: express.Request, res: express.Response) => {
  res.send("Hello World");
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.type("text");
  res.send("Hello World");
});

app.listen(app.settings.port, () => {
  console.log("App working on", app.settings.port);
});
