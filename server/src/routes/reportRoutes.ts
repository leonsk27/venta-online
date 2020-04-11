import { Router } from 'express';
import reportController from '../controllers/reportController';
class ReportRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/1', reportController.reportOne);
        this.router.get('/3/:date1/:date2', reportController.reportThree);
        this.router.get('/5', reportController.reportFive);
        this.router.get('/7', reportController.reportSeven);
    }
}
const reportRoutes = new ReportRoutes();
export default reportRoutes.router;