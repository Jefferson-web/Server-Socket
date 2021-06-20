import express, { Application } from 'express';
import { SERVER_PORT } from '../config/config';
import cors from 'cors';
import http from 'http';
import { Socket, Server as socketIO } from 'socket.io';

export default class Server {

    private app: Application;
    private httpServer: http.Server;
    private io: any;
    private static _instance: Server;

    private constructor() {
        this.app = express();
        this.config();
        this.httpServer = http.createServer(this.app);
        this.io = new socketIO(this.httpServer, { cors: { origin: 'http://localhost:4200' } });
        this.listenEvents();
    }

    public static get instance() {
        if (!this._instance) {
            this._instance = new Server();
        }
        return this._instance;
    }

    config() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors({ origin: true }));
    }

    listenEvents() {
        this.io.on('connection', (socket: Socket) => {
            socket.emit('test:event', 'This is a data');
        });
    }

    start(callback: Function) {
        this.httpServer.listen(SERVER_PORT, callback());
    }

}