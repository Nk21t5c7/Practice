import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const UserSchema = new Schema({
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

// module.exports = User;
export default User;