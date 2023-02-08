import { Request, Response } from "express";
import quizService from '../services/quiz.services.js';


class QuizController{


    async postMaths(req: Request, res: Response) {
        console.log(req.body.answers); 
        const postReq = await quizService.postMathsQuiz({ question: req.body.question, answers: { "a":req.body.answers[0],"b":req.body.answers[1], }, correct_answer:req.body.answers[1] ,level:'professional'})
        return res.status(201).send({ status: true, message: "question addded succcessfully" });
    }

    async getMathsQuestions(req:Request, res:Response){

        const allQuiz = await quizService.getMathQuiz();
        return res.status(200).send({
            status: true, data: allQuiz
        });

    }

    async getMathsBeginnerQuestion(req:Request, res:Response){

        const quiz = await quizService.getBeginnerMathsQuiz();
        return res.status(200).send({status:true, data:quiz})
    }

    async getMathsProfessionalQuestion(req: Request, res:Response){

        const quiz = await quizService.getProfessionalMathsQuiz();
        return res.status(200).send({status:true, data:quiz})
    }
}

export default new QuizController();