const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
UserSchema.pre('save', function(next){
    if(!this.name){
        next(new Error('No name.'))
    }
    next();
})

const User = mongoose.model('names', UserSchema);
// User.createIndexes();

module.exports = User;