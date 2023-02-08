"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_js_1 = __importDefault(require("../config/db.config.js"));
const index_routes_js_1 = __importDefault(require("../routes/index.routes.js"));
const middleware = (app) => {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    (0, db_config_js_1.default)();
    app.use(index_routes_js_1.default);
};
exports.default = middleware;
