export interface IBackend {
    DataPush(data:Buffer):boolean;
    EventPub(event:String):boolean;
}