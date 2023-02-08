import express from 'express';
import database from '../config/db.config.js';
import indexRouter from '../routes/index.routes.js';

const middleware = (app:express.Application) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    database();

    app.use(indexRouter);
    
}

export default middleware;