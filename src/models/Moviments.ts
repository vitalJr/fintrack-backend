import { Schema, model } from 'mongoose';

const MovimentsSchema = new Schema({
    userReference:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
})

export default model('Moviments', MovimentsSchema); 