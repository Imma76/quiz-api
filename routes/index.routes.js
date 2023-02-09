"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const maths_routes_1 = __importDefault(require("./maths.routes"));
const physics_routes_1 = __importDefault(require("./physics.routes"));
const indexRouter = express_1.default.Router();
indexRouter.use('/maths', maths_routes_1.default);
indexRouter.use('/physics', physics_routes_1.default);
exports.default = indexRouter;
