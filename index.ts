import HttpServer from './classes/server';
import { SERVER_PORT } from './config/config';

const server = HttpServer.instance;

server.start(() => {
    console.log(`Server listening on port ${ SERVER_PORT }`);
});