import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import keyPass from './controllers/keyPass';
class Auth {
    public generateToken(idRol: string, idUsuario: string) {
        const payload = {id: idRol, idUsuario: idUsuario};
        const option = {expiresIn: 600};
        const token = jwt.sign(payload, keyPass.secret, option);
        return token;
    }
    public ensureToken(req: Request, res: Response, next: NextFunction) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            jwt.verify(bearerToken, keyPass.secret, (err: any, data: any) => {
                if (err) {
                    res.sendStatus(503);
                } else {
                    console.log(data);
                    next();
                }
            })
        }
        else {
            res.sendStatus(500);
        }
    }
}
const auth = new Auth();
export default auth;