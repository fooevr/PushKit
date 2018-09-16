import {IServer} from "../../src/server";
import * as socketio from "socket.io";
import * as http from "http";
import {Dictionary} from "../../utils/dictionary";
import {Socket} from "socket.io";
import {ConnectionManager} from "./connectionManager"

class Server implements IServer {
    private onDataCallback: (data: Buffer) => boolean;
    private onEventCallback: (event: String) => boolean;
    private readonly listenPort: number;
    private readonly clients: Dictionary<Socket> = new Dictionary<Socket>();
    constructor(port: number){
        this.listenPort = port;
    }
    OnData(callback: (data: Buffer) => boolean) {
        this.onDataCallback = callback;
    }

    OnEvent(callback: (event: String) => boolean) {
        this.onEventCallback = callback;
    }

    Start(): void {
        let server = new http.Server();
        let io = new socketio(server);
        io.on('connection', (socket)=>{
            this.clients[socket.id] = new ConnectionManager(socket, this.onDataCallback, this.onEventCallback);
            socket.on('disconnect', ()=>{
                delete this.clients[socket.id];
            });
        });
        server.listen(this.listenPort);
    }
}

export {Server}