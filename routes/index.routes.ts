import express from 'express';
import mathsRouter from './maths.routes';


const indexRouter = express.Router();


indexRouter.use('/maths', mathsRouter);


export default indexRouter;