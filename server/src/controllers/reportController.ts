import { Request, Response } from 'express';
import pool from '../database';
import query from '../queries/query';
class ReportController {

    public async reportOne(req: Request, res: Response) {
        const { idrfid } = req.params;
        const report = await pool.query(query.queryOne, idrfid);
        res.json(report);
    }

}
const reportController = new ReportController();
export default reportController;
