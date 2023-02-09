"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const physics_controller_1 = __importDefault(require("../controller/physics.controller"));
const physicsRouter = express_1.default.Router();
physicsRouter.post('/', physics_controller_1.default.createPhysicsQuestion);
exports.default = physicsRouter;
