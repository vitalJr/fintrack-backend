import express from 'express';
import 'express-async-errors';
import './database';
import cors from 'cors';



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


export default app;
