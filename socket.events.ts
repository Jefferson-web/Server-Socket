import { Server, Socket } from "socket.io";

export default (socket: Socket, io: Server) => {

    socket.on('message', (payload: { from: string, body: string }) => {
        io.emit('message:new', payload);
    });

    socket.on('disconnect', () => {
        console.log('Socket disconnected', socket.id);
    });

}