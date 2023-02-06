import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    question: {
        type: String,

    },

    anwsers: {
        type:JSON,
    }
},);


const Quiz = mongoose.model('quiz', quizSchema);

export default Quiz;

