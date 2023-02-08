import mongoose from 'mongoose';

const mathsSchema = new mongoose.Schema({
    question: {
        type: String,

    },

    anwsers: {
        type:JSON,
    }
},);


const Quiz = mongoose.model('Maths', mathsSchema);

export default Quiz;

