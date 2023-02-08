"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mathsSchema = new mongoose_1.default.Schema({
    question: {
        type: String,
    },
    answers: {
        type: Object,
    },
    correct_answer: {
        type: String
    },
    level: {
        type: St
    }
});
const Quiz = mongoose_1.default.model('Maths', mathsSchema);
exports.default = Quiz;
