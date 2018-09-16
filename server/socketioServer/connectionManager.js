"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = require("../../utils/logger");
var moduleName = 'SOCKETIO';
var ConnectionManager = /** @class */ (function () {
    function ConnectionManager(socket, onDataCallback, onEventCallback) {
        var _this = this;
        this._socket = socket;
        this._onDataCallback = onDataCallback;
        this._onEventCallback = onEventCallback;
        logger.info(moduleName, 'connected ' + socket.id);
        socket.on('disconnect', function (reason) {
            logger.info(moduleName, 'disconnect ' + reason);
        });
        socket.on('data', function (topic, data, ack) {
            logger.info(moduleName, 'topic [' + topic + '] data ' + data);
            if (ack) {
                ack(_this._onDataCallback(data));
            }
        });
        socket.on('sub', function (topic, filter, ack) {
        });
    }
    Object.defineProperty(ConnectionManager.prototype, "socket", {
        get: function () {
            return this._socket;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionManager;
}());
exports.ConnectionManager = ConnectionManager;
//# sourceMappingURL=connectionManager.js.map