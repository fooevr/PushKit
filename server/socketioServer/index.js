"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socketio = require("socket.io");
var http = require("http");
var dictionary_1 = require("../../utils/dictionary");
var connectionManager_1 = require("./connectionManager");
var Server = /** @class */ (function () {
    function Server(port) {
        this.clients = new dictionary_1.Dictionary();
        this.listenPort = port;
    }
    Server.prototype.OnData = function (callback) {
        this.onDataCallback = callback;
    };
    Server.prototype.OnEvent = function (callback) {
        this.onEventCallback = callback;
    };
    Server.prototype.Start = function () {
        var _this = this;
        var server = new http.Server();
        var io = new socketio(server);
        io.on('connection', function (socket) {
            _this.clients[socket.id] = new connectionManager_1.ConnectionManager(socket, _this.onDataCallback, _this.onEventCallback);
            socket.on('disconnect', function () {
                delete _this.clients[socket.id];
            });
        });
        server.listen(this.listenPort);
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=index.js.map