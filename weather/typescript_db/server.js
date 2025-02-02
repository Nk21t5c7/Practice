"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = process.env.PORT || 3098;
const app = (0, express_1.default)();
const apiKey = process.env.WEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?`;
app.set("port", port);
app.get('/search', (req, res) => {
    res.send("Hello World");
});
app.get('/current-weather', (req, res) => {
    // const {lat,lon} = req.body;
    console.log(req.body);
});
app.get('/', (req, res) => {
    res.type('text');
    res.send("Hello World");
});
app.listen(app.settings.port, () => {
    console.log('App working on', app.settings.port);
});
