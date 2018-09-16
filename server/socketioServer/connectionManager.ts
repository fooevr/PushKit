import {Socket} from "socket.io";
import * as logger from "../../utils/logger"

const moduleName = 'SOCKETIO';
class ConnectionManager{
    private readonly _socket: Socket;
    private readonly _onDataCallback: (data: Buffer) => boolean;
    private readonly _onEventCallback: (event: String) => boolean;
    get socket():Socket{
        return this._socket;
    }

    constructor(socket, onDataCallback: (data: Buffer) => boolean, onEventCallback: (event: String) => boolean) {
        this._socket = socket;
        this._onDataCallback = onDataCallback;
        this._onEventCallback = onEventCallback;
        logger.info(moduleName, 'connected ' + socket.id);
        socket.on('disconnect', (reason:String)=>{
            logger.info(moduleName, 'disconnect ' + reason);
        });

        socket.on('data', (topic:String, data: Buffer, ack: (success: boolean) => void) => {
            logger.info(moduleName, 'topic [' + topic + '] data ' + data);
            if (ack){
                ack(this._onDataCallback(data))
            }
        });

        socket.on('sub', (topic: String, filter: String, ack: (success: boolean) => void) => {

        });
    }
}

export {ConnectionManager}