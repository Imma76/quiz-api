import express from 'express';
import dotenv from 'dotenv';
import middleware from './middlewares/index.middleware.js';

dotenv.config();

const app = express();

middleware(app)
app.listen(2021, () => {
    console.log('app is up  and running on 2021');
})