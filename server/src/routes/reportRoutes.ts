import { Router } from 'express';
import reportController from '../controllers/reportController';
class ReportRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/1', reportController.reportOne);
<<<<<<< HEAD
        this.router.get('/3/:date1/:date2', reportController.reportThree);
        this.router.get('/5', reportController.reportFive);
=======
        //this.router.get('/2', reportController.reportTwo);
        this.router.get('/3', reportController.reportThree);
        //this.router.get('/4', reportController.reportFour);
        this.router.get('/5', reportController.reportFive)
        //this.router.get('/6', reportController.reportSix);;
>>>>>>> a7bd89ff60e029bad050bac9669df404ead31757
        this.router.get('/7', reportController.reportSeven);
        //this.router.get('/8', reportController.reportEigh);
    }
}
const reportRoutes = new ReportRoutes();
export default reportRoutes.router;