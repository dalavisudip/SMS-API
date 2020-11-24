
var  MainConfig =  require("../config/config")
const enableConsoleLogging = MainConfig.ENABLE_CONSOLE_LOGGING || 1
const enableFileLogging = MainConfig.ENABLE_FILE_LOGGING || 1
const defaultLogLevel = MainConfig.DEFAULT_LOG_LEVEL || 1 //Error
const env = MainConfig.ENV || "local"

module.exports = {
    enableConsoleLogging : enableConsoleLogging,
    enableFileLogging : enableFileLogging,
    logLevel : defaultLogLevel,
    env : env
}