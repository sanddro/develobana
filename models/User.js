import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    }
});



const User = mongoose.model('user', UserSchema);

export default User;
