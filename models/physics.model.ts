import mongoose from 'mongoose';

const physicsSchema = new mongoose.Schema({
    question: {
        type: String,

    },

    answers: {
        type:Object,
    },

    correct_answer:{

        type:String
    },
    level:{

        type:String
    }
},);


const PhysicsQuiz = mongoose.model('Physics', physicsSchema);

export default PhysicsQuiz;

