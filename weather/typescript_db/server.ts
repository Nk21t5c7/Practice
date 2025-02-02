import express from 'express';

const port = process.env.PORT || 3098;
const app: express.Express = express();
const apiKey = process.env.WEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?`;

app.set("port", port);

app.get('/search', (req: express.Request, res: express.Response) => {

    res.send("Hello World");
});

app.get('/current-weather', (req: express.Request, res: express.Response) => {
    // const {lat,lon} = req.body;
    console.log(req.body);
})
app.get('/', (req: express.Request, res: express.Response) => {
    res.type('text');
    res.send("Hello World");
});

app.listen(app.settings.port, () =>{
    console.log('App working on', app.settings.port);
})