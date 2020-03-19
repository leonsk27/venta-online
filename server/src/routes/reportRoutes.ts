import { Router } from 'express';
import reportController from '../controllers/reportController';
class ReportRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
        
    }
}
const reportRoutes = new ReportRoutes();
export default reportRoutes.router;