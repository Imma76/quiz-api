import { Request, Response } from 'express';
import physicsServices
    from '../services/physics.services';

class PhysicsController{

    async createPhysicsQuestion(req:Request, res:Response) {
        const quiz = await physicsServices.createQuestion({ question: req.body.question, answers: { "a":req.body.answers[0],"b":req.body.answers[1], }, correct_answer:req.body.answers[1] ,level:'professional'})
        return res.status(201).send({ status: true, message: "question addded succcessfully" });
    }

    async getPhyscsQuestions(req:Request, res:Response){

        const allQuiz = await physicsServices.getPhysicsQuiz();
        return res.status(200).send({
            status: true,count:allQuiz.length, data: allQuiz
        });

    }

    async getPhysicsBeginnerQuestion(req:Request, res:Response){

        const quiz = await physicsServices.getBeginnerPhysicsQuiz();
        return res.status(200).send({status:true,count:quiz.length, data:quiz})
    }

    async getPhysicsProfessionalQuestion(req: Request, res:Response){

        const quiz = await physicsServices.getProfessionalPhysicsQuiz();
        return res.status(200).send({status:true,count:quiz.length,  data:quiz})
    }

}

export default new PhysicsController();