"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PushKit_1 = require("./PushKit");
var redisBackend_1 = require("./backend/redisBackend");
var socketioServer_1 = require("./server/socketioServer");
var p = new PushKit_1.default();
p.backend = new redisBackend_1.Backend();
p.useServer(new socketioServer_1.Server(3000));
p.Start();
//# sourceMappingURL=test.js.map