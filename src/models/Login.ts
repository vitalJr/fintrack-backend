import {} from 'mongoose';


const LoginSchema = new Schema({
    userRrefernce: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});