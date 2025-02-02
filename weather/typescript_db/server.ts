import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3098;
const app: express.Express = express();

app.use(cors());
app.use(express.json());
const apiKey = process.env.WEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?`;

app.set("port", port);

app.get('/search', (req: express.Request, res: express.Response) => {

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
app.get('/', (req: express.Request, res: express.Response) => {
    res.type('text');
    res.send("Hello World");
});

app.listen(app.settings.port, () =>{
    console.log('App working on', app.settings.port);
})