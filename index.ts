import Server from './server';
import { SERVER_PORT } from './config';

const server = Server.instance;

server.start(() => {
    console.log(`Server listening on port ${ SERVER_PORT }`);
});