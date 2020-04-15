import { Request, Response } from 'express';
import pool from '../database';
import queryReport from '../queries/queryReport';
class ReportController {

    public async reportOne(req: Request, res: Response) {
        const { month } = req.params;
        const report = await pool.query(queryReport.queryOne, [month]);
        res.json(report);
    }

    public async reportTwo(req: Request, res: Response) {
        const { year } = req.params;
        const report = await pool.query(queryReport.queryTwo, [year]);
        res.json(report);
    }

    public async reportTwoAux(req: Request, res: Response) {
        const report = await pool.query(queryReport.queryTwoAux);
        res.json(report);
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
        const report = await pool.query(queryReport.queryFive);
        res.json(report);
    }
    
    public async reportSix(req: Request, res: Response) {
        const {idDepartamento} = req.params;
        const report = await pool.query(queryReport.querySix, [idDepartamento]);
        res.json(report);
    }
    
    public async reportSeven(req: Request, res: Response) {
        const report = await pool.query(queryReport.querySeven);
        res.json(report);
    }
    
    public async reportEight(req: Request, res: Response) {
        const report =  await pool.query(queryReport.queryEight);
        res.json(report);
    }
}
const reportController = new ReportController();
export default reportController;
