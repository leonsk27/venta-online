"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const keyPass_1 = __importDefault(require("./controllers/keyPass"));
class Auth {
    generateToken(idRol, idUsuario) {
        const payload = { id: idRol, idUsuario: idUsuario };
        const option = { expiresIn: 600 };
        const token = jsonwebtoken_1.default.sign(payload, keyPass_1.default.secret, option);
        return token;
    }
    ensureToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            jsonwebtoken_1.default.verify(bearerToken, keyPass_1.default.secret, (err, data) => {
                if (err) {
                    res.sendStatus(503);
                }
                else {
                    console.log(data);
                    next();
                }
            });
        }
        else {
            res.sendStatus(500);
        }
    }
}
const auth = new Auth();
exports.default = auth;
