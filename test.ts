import PushKit from "./PushKit";
import {Backend} from "./backend/redisBackend";
import {Server} from "./server/socketioServer";

let p = new PushKit();
p.backend = new Backend();
p.useServer(new Server(3000));
p.Start();