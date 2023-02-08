import mongoose from 'mongoose';

const mathsSchema = new mongoose.Schema({
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


const MathsQuiz = mongoose.model('Maths', mathsSchema);

export default MathsQuiz;

