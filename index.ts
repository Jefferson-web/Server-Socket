import Server from './classes/server';
import { SERVER_PORT } from './config/config';

const server = new Server();

server.start(() => {
    console.log(`Server listening on port ${SERVER_PORT}`);
});