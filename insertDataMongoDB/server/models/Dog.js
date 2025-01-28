const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const BodySchema = new mongoose.Schema({
    weight: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    food: {
        type: Number,
        required: true
    }

})
const ActivitySchema = new mongoose.Schema({
    walk: {
        type: Number,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    }

})

const allSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true
    },
    body: {
        type: BodySchema,
        required: true,
    },
    activity: {
        type: ActivitySchema,
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    breed: {
        type: String,
        default: true
    }

})

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        default: uuidv4
    },
    allData: [
        {
            type: allSchema,
            required: true
        }
    ]
});

DogSchema.pre('save', function (next) {
    if (!this.name) {
        next(new Error('No name.'))
    }
    next();
})

const Dog = mongoose.model('dogs', DogSchema);

module.exports = Dog;