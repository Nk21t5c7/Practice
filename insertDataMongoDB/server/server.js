const express = require('express');
const mongoose = require('./db');
const User = require('./models/User');
const Blast = require('./models/Blast');
const Dog = require('./models/Dog');
const cors = require('cors');


const app = express();
const port = 3030;
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: false
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);


app.get('/getUser', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(error => res.json(error));
    // console.log('mongoose.connection.db.databaseName', mongoose.connection.db.databaseName);
});
app.get('/', (req, res) => {
    res.send('App working');
    // console.log('mongoose.connection.db.databaseName', mongoose.connection.db.databaseName);
});

app.post('/register-csv', async (req, res) => {
    try {
        const users = req.body;
        const results = [];
        // console.log('users', users.csvData);
        // console.log('users', Array.isArray(Object.values(users.csvData)));
        Object.values(users.csvData).forEach(async (item) => {
            console.log('item', item);
            const user = new User({ name: item.name, email: item.email });
            let result = await user.save();
            // res.json(), res,send()がループで毎回呼ばれるとエラーになる
            results.push(result);
        })
        res.json(results);

    }
    catch (error) {
        res.status(500).send(error);

    }
});
app.post('/register-dog', async (req, res) => {
    try {

        const dogData = req.body;
        const results = [];
        for (const item of Object.values(dogData.csvData)) {
            console.log(item);

            if (!item['Player Name']) return;
            const dogCollection = mongoose.connection.collection('dogs');
            let dog = await dogCollection.findOne({ name: item['Player Name'] });
            console.log('dog', dog);
            if (dog) {
                dog = new Dog(dog);
                dog.allData.push({
                    color: item.Color,
                    body: {
                        weight: item.Weight,
                        height: item.Height,
                        food: item.Food

                    },
                    activity: {
                        walk: item.Walk,
                        distance: item.Distance
                    },
                    date: new Date(item.Date),
                })
                let result = await dogCollection.findOneAndUpdate(
                    { id: dog.id },
                    { $set: { allData: dog.allData } },
                    { new: true }
                );
                results.push(result);
            }

            else {
                const data = new Dog({
                    name: item['Player Name'],

                    allData: [{

                        color: item.Color,
                        body: {
                            weight: item.Weight,
                            height: item.Height,
                            food: item.Food

                        },
                        activity: {
                            walk: item.Walk,
                            distance: item.Distance
                        },
                        date: new Date(item.Date),
                        breed: item.Breed

                    }]


                });

                let result = await data.save();
                results.push(result);
            }

        }
        res.json(results);

    } catch (error) {
        res.status(500).send(error);

    }
})
app.post('/register-blast', async (req, res) => {
    try {
        const blastData = req.body;
        const results = [];

        Object.values(blastData.csvData).forEach(async (item) => {
            console.log('name', item['Player Name'], 'name');

            if (!item['Player Name']) return;

            const data = new Blast({
                name: item['Player Name'], equipment: item.Equipment, handedness: item.Handedness, swingDetails: item['Swing Details'],
                planeScore: parseFloat(item['Plane Score']), connectionScore: item['Connection Score'], rotationScore: item['Rotation Score'], batSpeed: item['Bat Speed (mph)'],
                rotationalAcceleration: item['Rotational Acceleration (g)'], onPlaneEfficiency: item['On Plane Efficiency (%)'],
                attackAngle: item['Attack Angle (deg)'], earlyConnection: item['Early Connection (deg)'], connectionAtImpact: item['Connection at Impact (deg)'],
                verticalBatAngle: item['Vertical Bat Angle (deg)'], power: item['Power (kW)'], timeToContact: item['Time to Contact (sec)'], date: item.Date
            });
            console.log('data', data);
            let result = await data.save();
            // res.json(), res,send()がループで毎回呼ばれるとエラーになる
            results.push(result);
        })
        res.json(results);

    }
    catch (error) {
        res.status(500).send(error);

    }
})

app.post('/register', async (req, res) => {
    console.log('Received data:', req.body);
    try {
        const user = new User({ name: req.body.name, email: req.body.email });
        let result = await user.save();
        res.json(result);
    }
    catch (error) {
        res.status(500).send(error);

    }
})

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - not found');
    // これをクライアントにsendする
})
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});