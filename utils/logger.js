"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
var logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ]
});
logger.add(new winston.transports.Console({
    format: winston.format.combine(winston.format.colorize(), winston.format.simple())
}));
function info(module, msg) {
    logger.info('[' + module + '] ' + msg);
}
exports.info = info;
function warn(module, msg) {
    logger.warn('[' + module + '] %s' + msg);
}
exports.warn = warn;
function error(module, msg) {
    logger.error('[' + module + '] %s' + msg);
}
exports.error = error;
//# sourceMappingURL=logger.js.map