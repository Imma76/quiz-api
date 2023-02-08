import express from 'express';
import mathsController from '../controller/maths.controller';


const mathsRouter = express.Router();

mathsRouter.post('/',mathsController.postMaths )


export default mathsRouter;