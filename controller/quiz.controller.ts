import { Request, Response } from "express";
import quizService from '../services/quiz.services.js';


class QuizController{


    async postMaths(req: Request, res: Response) {
        
        const postReq = await quizService.postQuiz({ question: req.body.questions, answers: req.body.answers })
        return res.status(201).send({ status: true, message: "question addded succcessfully" });
    }
}

export default new QuizController();