"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quiz_services_js_1 = __importDefault(require("../services/quiz.services.js"));
class QuizController {
    postMaths(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body.answers);
            const postReq = yield quiz_services_js_1.default.postMathsQuiz({ question: req.body.question, answers: { "a": req.body.answers[0], "b": req.body.answers[1], }, correct_answer: req.body.answers[1], level: 'professional' });
            return res.status(201).send({ status: true, message: "question addded succcessfully" });
        });
    }
    getMathsQuestions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const allQuiz = yield quiz_services_js_1.default.getMathQuiz();
            return res.status(200).send({
                status: true, data: allQuiz
            });
        });
    }
    getMathsBeginnerQuestion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const quiz = yield quiz_services_js_1.default.getBeginnerMathsQuiz();
            return res.status(200).send({ status: true, message: quiz });
        });
    }
}
exports.default = new QuizController();
