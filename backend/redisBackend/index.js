"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redis = require("redis");
var logger = require("../../utils/logger");
var moduleName = "REDIS";
var Backend = /** @class */ (function () {
    function Backend() {
        this.conn = redis.createClient();
        this.conn.on("error", function (err) {
            logger.warn(moduleName, err);
        });
    }
    Backend.prototype.DataPush = function (data) {
        return true;
    };
    Backend.prototype.EventPub = function (event) {
        return true;
    };
    return Backend;
}());
exports.Backend = Backend;
//# sourceMappingURL=index.js.map