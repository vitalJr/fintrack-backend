import {Schema, model} from 'mongoose';


const RegisterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

export default model('Register', RegisterSchema);