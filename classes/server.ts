import express, { Application } from 'express';
import { SERVER_PORT } from '../config/config';
import cors from 'cors';
import http from 'http';
import { Socket, Server } from 'socket.io';

export default class HttpServer {

    private app: Application;
    private httpServer: http.Server;
    private io: any;
    private static _instance: HttpServer;

    private constructor() {
        this.app = express();
        this.config();
        this.httpServer = http.createServer(this.app);
        this.io = new Server(this.httpServer, { cors: { origin: 'http://localhost:4200' } });
        this.listenEvents();
    }

    public static get instance() {
        if (!this._instance) {
            this._instance = new HttpServer();
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