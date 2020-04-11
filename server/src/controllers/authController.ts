import { Request, Response } from 'express';
import pool from '../database';

import keyPass from './keyPass';
import auth from '../auth';

class AuthController {

    public async signin(req: Request, res: Response) {
        const usuario = req.body.usuario;
        const password = req.body.password;
        let login: any[] = await pool.query("select idusuario, idrol from usuario where usuario = ? and aes_decrypt(contrasenha, ?) = ? and activo = 1", [usuario, keyPass.pass, password]);
        if (login.length > 0) {
            const token = auth.generateToken(login[0].idrol, login[0].idusuario);
             res.json({token: token});
        }
        else {
            login = await pool.query("select idcliente from cliente where usuario = ? and aes_decrypt(contrasenha, ?) = ? and activo = 1", [usuario, keyPass.pass, password]);
            if (login.length > 0) {
                const token = auth.generateToken('0', login[0].idcliente);
                res.json({token: token});
            }
            else {
                res.status(403).send({message: "algo salió mal"});
            }
        }
    }
}
const authController = new AuthController();
export default authController;
