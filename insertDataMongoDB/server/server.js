const express = require('express');
const mongoose = require('./db');
const User = require('./models/User');
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
        const results  = [];
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