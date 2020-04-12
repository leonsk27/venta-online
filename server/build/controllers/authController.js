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
const keyPass_1 = __importDefault(require("./keyPass"));
const auth_1 = __importDefault(require("../auth"));
class AuthController {
    signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = req.body.usuario;
            const password = req.body.password;
            let login = yield database_1.default.query("select idusuario, idrol from usuario where usuario = ? and aes_decrypt(contrasenha, ?) = ? and activo = 1", [usuario, keyPass_1.default.pass, password]);
            if (login.length > 0) {
                const token = auth_1.default.generateToken(login[0].idrol, login[0].idusuario);
                res.json({ token: token });
            }
            else {
                login = yield database_1.default.query("select idcliente from cliente where usuario = ? and aes_decrypt(contrasenha, ?) = ? and activo = 1", [usuario, keyPass_1.default.pass, password]);
                if (login.length > 0) {
                    const token = auth_1.default.generateToken('0', login[0].idcliente);
                    res.json({ token: token });
                }
                else {
                    res.status(403).send({ message: "algo salió mal" });
                }
            }
        });
    }
}
const authController = new AuthController();
exports.default = authController;
