import Quiz from "../models/quiz.model.js";


class QuizService{

    async postQuiz(quiz: {question:string, answers:Object, correct_answer:string, level:string}) {
        const post = await Quiz.create(quiz);
        return post;
    }

}


export default new QuizService();