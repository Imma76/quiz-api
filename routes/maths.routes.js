"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const maths_controller_1 = __importDefault(require("../controller/maths.controller"));
const mathsRouter = express_1.default.Router();
mathsRouter.post('/', maths_controller_1.default.postMaths);
mathsRouter.get('/', maths_controller_1.default.getMathsQuestions);
mathsRouter.get('/beginner', maths_controller_1.default.getMathsBeginnerQuestion);
exports.default = mathsRouter;
