"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const locations = require("./locations.json");
const axios = require("axios");
dotenv_1.default.config();
const port = process.env.PORT || 3098;
const app = (0, express_1.default)();
const mongoUri = process.env.MONGODB;
mongoose_1.default.connect(mongoUri);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const apiKey = process.env.WEATHER_API_KEY;
const nasaApi = process.env.NASA_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?`;
app.set("port", port);
app.post("/current-weather", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fetch(url + `lat=${req.body.lat}&lon=${req.body.long}&appid=${apiKey}`);
    if (result.status === 200) {
        const data = yield result.json();
        // console.log(data);
        res.json(data);
    }
    else {
        console.log("error");
    }
}));
app.get("/place/description/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    const cityName = Object.keys(locations).find((cityName) => cityName === name);
    if (!cityName)
        res.json({ error: "City not found" });
    if (cityName) {
        const cityCollection = mongoose_1.default.connection.collection("Countries");
        yield cityCollection
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
}));
app.post("/place/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { name } = req.params;
    const cityLocation = Object.keys(locations).find((cityName) => cityName === name);
    // console.log(locations[cityLocation], cityLocation);
    if (!cityLocation)
        res.json({ error: "City not found" });
    // console.log(name, cityLocation);
    if (cityLocation) {
        yield fetch(url +
            `lat=${(_a = locations[cityLocation]) === null || _a === void 0 ? void 0 : _a.lat}&lon=${(_b = locations[cityLocation]) === null || _b === void 0 ? void 0 : _b.lon}&appid=${apiKey}`)
            .then((result) => {
            // console.log(result);
            if (!result.ok)
                res.send("Error");
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
}));
app.get("/cityWeather", (req, res) => {
    res.send("Hello World");
});
app.get("/", (req, res) => {
    res.type("text");
    res.send("Hello World");
});
app.listen(app.settings.port, () => {
    console.log("App working on", app.settings.port);
});
