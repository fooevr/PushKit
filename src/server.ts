export interface IServer {
    Start(): void;
    OnData(callback:(data: Buffer) => boolean);
    OnEvent(callback:(event: String) => boolean);
}