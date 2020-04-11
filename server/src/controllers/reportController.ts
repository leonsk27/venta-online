import { Request, Response } from 'express';
import pool from '../database';
import queryReport from '../queries/queryReport';
class ReportController {

    public async reportOne(req: Request, res: Response) {
        const {  } = req.params;
        const report = await pool.query(queryReport.queryOne);
        res.json(report);
    }
    public async reportTwo(req: Request, res: Response) {

    }
    public async reportThree(req: Request, res: Response) {
        const { date1 } = req.params;
        const { date2 } = req.params;
        const report = await pool.query(queryReport.queryThree, [date1, date2]);
        res.json(report);
    }
    public async reportFour(req: Request, res: Response) {
    }
    public async reportFive(req: Request, res: Response) {
        const { idrfid } = req.params;
        const report = await pool.query(queryReport.queryFive, idrfid);
        res.json(report);
    }
    public async reportSix(req: Request, res: Response) {

    }
    public async reportSeven(req: Request, res: Response) {
        const { idrfid } = req.params;
        const report = await pool.query(queryReport.querySeven, idrfid);
        res.json(report);
    }
    public async reportEigh(req: Request, res: Response) {
    }
}
const reportController = new ReportController();
export default reportController;
