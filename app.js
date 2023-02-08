"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_middleware_js_1 = __importDefault(require("./middlewares/index.middleware.js"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, index_middleware_js_1.default)(app);
app.listen(2021, () => {
    console.log('app is up  and running on 2021');
});
