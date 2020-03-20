import { Router } from 'express';
import reportController from '../controllers/reportController';
class ReportRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
        this.router.use('/1', reportController.reportOne);
        this.router.use('/3', reportController.reportThree);
        this.router.use('/5', reportController.reportFive);
        this.router.use('/7', reportController.reportSeven);
    }
}
const reportRoutes = new ReportRoutes();
export default reportRoutes.router;