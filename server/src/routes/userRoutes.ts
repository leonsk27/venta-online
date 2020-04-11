import { Router } from 'express';
import authController from '../controllers/authController';
class UserRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
        this.router.post('/signin', authController.signin);
    }
}
const userRoutes = new UserRoutes();
export default userRoutes.router;