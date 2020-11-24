'use strict'

const winston = require('winston')
const { combine, timestamp, label, printf } = winston.format

var Log = function() {}

var logger

Log.Initialize = () => {
    const logConfig = require('../config/log')
    

    var transports = []
    if(logConfig.enableConsoleLogging == 1) {
        transports.push(new winston.transports.Console())
    }
    if(logConfig.enableFileLogging == 1) {
        transports.push(new winston.transports.File({ filename: '/opt/logs/api.log' }))
    }
 
    const customLevels = {
        SLACK : 0, 
        ERROR : 1, 
        WARNING : 2, 
        INFO : 3, 
        VERBOSE : 4, 
        DEBUG : 5
    }

    const levels = ['SLACK','ERROR','WARNING','INFO','VERBOSE','DEBUG']

    const logFormat = printf(info => {
        return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
    })

    logger = winston.createLogger({
        levels : customLevels,
        level : levels[logConfig.logLevel],
        transports : transports,
        format : combine(label({ label: `Tesseract POC ${logConfig.env}` }), timestamp(),logFormat),
        exceptionHandlers: [ new winston.transports.File({ filename: '/opt/logs/exceptions.log' })]
    })

    logger.exitOnError = false
}

Log.I = (msg,meta) => {
    if(logger == null || logger == undefined) {
        Log.Initialize()
    }
    logger.INFO(msg,meta)
}

Log.D = (msg,meta) => {
    if(logger == null || logger == undefined) {
        Log.Initialize()
    }
    logger.DEBUG(msg,meta)
}

Log.W = (msg,meta) => {
    if(logger == null || logger == undefined) {
        Log.Initialize()
    }
    logger.WARNING(msg,meta)
}

Log.E = (msg,meta) => {
    if(logger == null || logger == undefined) {
        Log.Initialize()
    }
    logger.ERROR(msg,meta)
}



module.exports = Log