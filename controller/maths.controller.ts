import { Request, Response } from "express";
import quizService from '../services/quiz.services.js';


class QuizController{


    async postMaths(req: Request, res: Response) {
        console.log(req.body.answers); 
        const postReq = await quizService.postQuiz({ question: req.body.question, answers: { "a":req.body.answers[0],"b":req.body.answers[1], }, correct_answer:req.body.answers[1] ,level:'beginner' })
        return res.status(201).send({ status: true, message: "question addded succcessfully" });
    }
}

export default new QuizController();