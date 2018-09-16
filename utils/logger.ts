import * as winston from "winston"
const logger = winston.createLogger({
    level: 'info',
    format:winston.format.json(),
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
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    )
}));

export function info(module:String, msg:String){
    logger.info('[' + module + '] ' + msg)
}

export function warn(module:String, msg:String) {
    logger.warn('[' + module + '] %s' + msg)
}

export function error(module:String, msg:String) {
    logger.error('[' + module + '] %s' + msg)
}