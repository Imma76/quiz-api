import express from 'express';
import mathsController from '../controller/maths.controller';


const mathsRouter = express.Router();

mathsRouter.post('/', mathsController.postMaths)
mathsRouter.get('/', mathsController.getMathsQuestions);
mathsRouter.get('/beginner', mathsController.getMathsBeginnerQuestion);
mathsRouter.get('/professional', mathsController.getMathsProfessionalQuestion);


export default mathsRouter;