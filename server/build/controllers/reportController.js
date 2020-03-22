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
const database_1 = __importDefault(require("../database"));
const queryReport_1 = __importDefault(require("../queries/queryReport"));
class ReportController {
    reportOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idrfid } = req.params;
            const report = yield database_1.default.query(queryReport_1.default.queryOne, idrfid);
            res.json(report);
        });
    }
    reportTwo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    reportThree(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { date1 } = req.params;
            const { date2 } = req.params;
            const report = yield database_1.default.query(queryReport_1.default.queryThree, [date1, date2]);
            res.json(report);
        });
    }
    reportFor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    reportFive(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idrfid } = req.params;
            const report = yield database_1.default.query(queryReport_1.default.queryFive, idrfid);
            res.json(report);
        });
    }
    reportSix(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    reportSeven(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idrfid } = req.params;
            const report = yield database_1.default.query(queryReport_1.default.querySeven, idrfid);
            res.json(report);
        });
    }
    reportEigh(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
const reportController = new ReportController();
exports.default = reportController;
