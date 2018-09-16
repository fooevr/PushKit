import {IBackend} from "../../src/backend";
import * as redis from "redis"
import * as logger from "../../utils/logger"
const moduleName = "REDIS";
export class Backend implements IBackend{
    private readonly conn: any;
    constructor(){
        this.conn = redis.createClient();
        this.conn.on("error", (err)=>{
            logger.warn(moduleName, err);
        })
    }

    DataPush(data: Buffer): boolean {
        return true;
    }

    EventPub(event: String): boolean {
        return true;
    }
}