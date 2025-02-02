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
dotenv_1.default.config();
const port = process.env.PORT || 3098;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const apiKey = process.env.WEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?`;
app.set("port", port);
app.get('/search', (req, res) => {
    res.send("Hello World");
});
app.post('/current-weather', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const {lat,lon} = req.body;
    // console.log(req);
    const result = yield fetch(url + `lat=${req.body.lat}&lon=${req.body.long}&appid=${apiKey}`);
    if (result.status === 200) {
        const data = yield result.json();
        console.log(data);
        res.json(data);
    }
    else {
        console.log('error');
    }
}));
app.get('/', (req, res) => {
    res.type('text');
    res.send("Hello World");
});
app.listen(app.settings.port, () => {
    console.log('App working on', app.settings.port);
});
