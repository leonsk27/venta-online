"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ReportRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
    }
}
const reportRoutes = new ReportRoutes();
exports.default = reportRoutes.router;
