"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PushKit = /** @class */ (function () {
    function PushKit() {
        this._servers = [];
    }
    Object.defineProperty(PushKit.prototype, "backend", {
        get: function () {
            return this._backend;
        },
        set: function (backend) {
            this._backend = backend;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PushKit.prototype, "servers", {
        get: function () {
            return this._servers;
        },
        enumerable: true,
        configurable: true
    });
    PushKit.prototype.useServer = function (server) {
        var _this = this;
        server.OnData(function (data) {
            return _this._backend.DataPush(data);
        });
        server.OnEvent(function (event) {
            return _this._backend.EventPub(event);
        });
        this._servers.push(server);
    };
    PushKit.prototype.Start = function () {
        for (var _i = 0, _a = this._servers; _i < _a.length; _i++) {
            var item = _a[_i];
            item.Start();
        }
    };
    return PushKit;
}());
exports.default = PushKit;
//# sourceMappingURL=PushKit.js.map