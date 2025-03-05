import {Schema, model} from 'mongoose';


const LoginSchema = new Schema({
    userRrefernce: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    }
});

export default model('Login', LoginSchema);