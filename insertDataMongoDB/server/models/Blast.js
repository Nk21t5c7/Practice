const mongoose = require('mongoose');

const BlastSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    equipment: {
        type: String,
        required: true,
    },
    handedness: {
        type: String,
        required: false,
    },
    swingDetails: {
        type: String,
        required: false,
    },
    planeScore: {
        type: Number,
        required: false,
    },
    connectionScore: {
        type: Number,
        required: false,
    },
    rotationScore: {
        type: Number,
        required: false,
    },
    batSpeed: {
        type: Number,
        required: false,
    },
    rotationalAcceleration: {
        type: Number,
        required: false,
    },
    onPlaneEfficiency: {
        type: Number,
        required: false,
    },
    attackAngle: {
        type: Number,
        required: false,
    },
    earlyConnection: {
        type: Number,
        required: false,
    },
    connectionAtImpact: {
        type: Number,
        required: false,
    },
    verticalBatAngle: {
        type: Number,
        required: false,
    },
    power: {
        type: Number,
        required: false,
    },
    timeToContact: {
        type: Number,
        required: false,
    },
    date: {
        type: Date,
        required: true,
    },
});

// BlastSchema.pre('save', function(next){
//     if(!this.name){
//         next(new Error('No name.'))
//     }
    
//     next();
// })

const BlastData = mongoose.model('blasts', BlastSchema);

module.exports = BlastData;