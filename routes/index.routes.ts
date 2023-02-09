import express from 'express';
import mathsRouter from './maths.routes';
import physicsRouter from './physics.routes';


const indexRouter = express.Router();


indexRouter.use('/maths', mathsRouter);
indexRouter.use('/physics', physicsRouter);

export default indexRouter;