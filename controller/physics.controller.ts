import { Request, Response } from 'express';
import physicsServices
    from '../services/physics.services';

class PhysicsController{

    async createPhysicsQuestion(req:Request, res:Response) {
        const quiz = await physicsServices.createQuestion({ question: req.body.question, answers: { "a":req.body.answers[0],"b":req.body.answers[1], }, correct_answer:req.body.answers[1] ,level:'beginner'})
        return res.status(201).send({ status: true, message: "question addded succcessfully" });
    }
}

export default new PhysicsController();