import MathsQuiz from "../models/quiz.model.js";


class QuizService{

    async postMathsQuiz(quiz: {question:string, answers:Object, correct_answer:string, level:string}) {
        const post = await MathsQuiz.create(quiz);
        return post;
    }

    async getMathQuiz(){

        const allQuiz = await MathsQuiz.find();
        return allQuiz;
    }

    async getBeginnerMathsQuiz(){

        const quiz =await  MathsQuiz.find({level:'beginner'});

        return quiz;
    }

}


export default new QuizService();