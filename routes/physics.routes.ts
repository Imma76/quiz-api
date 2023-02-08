import express from 'express';
import physicsController from '../controller/physics.controller';

const physicsRouter = express.Router();


physicsRouter.post('/physics', physicsController.createPhysicsQuestion);

export default physicsRouter;