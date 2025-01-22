const mongoose = require('mongoose');
require('dotenv').config();
console.log('process.env.MONGODB_URI', process.env.MONGODB_URI); 



const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to test0122 database');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

connect();

module.exports = mongoose;