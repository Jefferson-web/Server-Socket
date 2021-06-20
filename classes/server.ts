import express, { Application } from 'express';
import { SERVER_PORT } from '../config/config';
import router from '../routes/router';
import cors from 'cors';

export default class Server {

    private app: Application;
    private port: any;

    constructor() {
        this.app = express();
        this.port = SERVER_PORT;
        this.config();
    }

    config() {
        // Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors({ origin: true }));
        // Routes
        this.app.use('/', router);
    }

    start(callback: Function) {
        this.app.listen(this.port, callback());
    }

}