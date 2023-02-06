import express from 'express';

const middleware = (app:express.Application) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
}

export default middleware;