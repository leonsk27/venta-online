"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportController_1 = __importDefault(require("../controllers/reportController"));
class ReportRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/1', reportController_1.default.reportOne);
        this.router.get('/3', reportController_1.default.reportThree);
        this.router.get('/5', reportController_1.default.reportFive);
        this.router.get('/7', reportController_1.default.reportSeven);
    }
}
const reportRoutes = new ReportRoutes();
exports.default = reportRoutes.router;
