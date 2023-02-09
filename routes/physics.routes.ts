import express from 'express';
import physicsController from '../controller/physics.controller';

const physicsRouter = express.Router();


physicsRouter.post('/', physicsController.createPhysicsQuestion);
physicsRouter.get('/',physicsController.getPhyscsQuestions);
physicsRouter.get('/beginner',physicsController.getPhysicsBeginnerQuestion);
physicsRouter.get('/professional', physicsController.getPhysicsProfessionalQuestion);
export default physicsRouter;