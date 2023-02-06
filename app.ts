import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.listen(2020, () => {
    console.log('app is up  and running');
})