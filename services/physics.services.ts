import PhysicsQuiz from "../models/physics.model";

class PhysicsService{

    async createQuestion(data: { question: string, answers: Object, correct_answer: string, level: string }) {
        const quiz = await PhysicsQuiz.create
        (data);

        return quiz;
    }
}

export default new PhysicsService();