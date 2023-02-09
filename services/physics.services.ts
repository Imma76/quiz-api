import PhysicsQuiz from "../models/physics.model";

class PhysicsService{

    async createQuestion(data: { question: string, answers: Object, correct_answer: string, level: string }) {
        const quiz = await PhysicsQuiz.create
        (data);

        return quiz;
    }
    async getPhysicsQuiz(){

        const allQuiz = await PhysicsQuiz.find();
        return allQuiz;
    }

    async getBeginnerPhysicsQuiz(){

        const quiz =await  PhysicsQuiz.find({level:'beginner'});

        return quiz;
    }

    async getProfessionalPhysicsQuiz(){

        const quiz =await  PhysicsQuiz.find({level:'professional'});

        return quiz;
    }
}

export default new PhysicsService();