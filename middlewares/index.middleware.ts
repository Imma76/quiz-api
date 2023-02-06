import express from 'express';
import database from '../config/db.config.js';

const middleware = (app:express.Application) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    database();
    
}

export default middleware;