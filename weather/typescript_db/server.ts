import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const locations = require('./locations.json');

dotenv.config();
const port = process.env.PORT || 3098;
const app: express.Express = express();

app.use(cors());
app.use(express.json());
const apiKey = process.env.WEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?`;

app.set("port", port);

app.get('/cityWeather', (req: express.Request, res: express.Response) => {
    res.send("Hello World");
});

app.post('/current-weather', async (req: express.Request, res: express.Response) => {
    // const {lat,lon} = req.body;
    // console.log(req);
    const result = await fetch(url+`lat=${req.body.lat}&lon=${req.body.long}&appid=${apiKey}`);
    if(result.status === 200){
        const data =  await result.json();
        console.log(data);
        res.json(data);
    }else{
        console.log('error');
    }
})

app.post('/place/:name', async (req: express.Request, res: express.Response) =>{
    const {name} = req.params;
    // console.log((locations));
    // const locationObj = JSON.parse(locations);
    // console.log(locationObj)
    const cityLocation = Object.keys(locations).find((cityName) => cityName === name);
    // console.log(locations[cityLocation], cityLocation);
    if(!cityLocation) res.json({error: "City not found"});

    console.log(name, cityLocation);
    await fetch(url+`lat=${locations[cityLocation]?.lat}&lon=${locations[cityLocation]?.lon}&appid=${apiKey}`)
    .then( (result) => {
        // console.log(result);
        if(!result.ok) res.send('Error');
        return result.json();
    })
    .then((data) => {
        // console.log(data.name);
        res.json(data);
    })
    .catch((err) => {
        res.send(err);
    });

})


app.get('/', (req: express.Request, res: express.Response) => {
    res.type('text');
    res.send("Hello World");
});

app.listen(app.settings.port, () =>{
    console.log('App working on', app.settings.port);
})