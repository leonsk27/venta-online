import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';


class Server {

    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.route();
    }
    config() {
        this.app.set('port',process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    route() {
       
    }
    start() {
        this.app.listen(this.app.get('port'), () => {

        });
    }
}
const server = new Server();
server.start();