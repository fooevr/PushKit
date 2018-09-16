import {Backend} from "./src/backend";
import {Server} from "./src/server";
import {BSON} from "bson";

export default class PushKit{
    private _backend: Backend;
    get backend():Backend{
        return this._backend;
    }
    set backend(backend:Backend){
        this._backend = backend;
    }

    private _servers: Array<Server> = [];
    get servers():Array<Server>{
        return this._servers;
    }

    useServer(server:Server){
        server.OnData((data:BSON): boolean => {
            return this._backend.DataPush(data);
        });
        server.OnEvent((event:String): boolean => {
            return this._backend.EventPub(event);
        });
        this._servers.push(server);
    }

    Start() {
        for(let item of this._servers){
            item.Start();
        }
    }
}
