"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const quizSchema = new mongoose_1.default.Schema({
    question: {
        type: String,
    },
    anwsers: {
        type: JSON,
    }
});
const Quiz = mongoose_1.default.model('quiz', quizSchema);
exports.default = Quiz;
