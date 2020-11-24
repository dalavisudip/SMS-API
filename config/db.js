
var  MainConfig =  require("../config/config")
var maxConnections = MainConfig.MAX_DB_CONNECTION || 50 
var host = MainConfig.DB_HOST 
var port = MainConfig.DB_PORT 
var username = MainConfig.DB_USER 
var password = MainConfig.DB_PWD 
var database = MainConfig.DB_NAME



var config = {
    multipleStatements : true,
    connectionLimit : maxConnections,
    host : host,
    user : username,
    password : password,
    database : database,
    port : port,
    ssl: true
}

module.exports = config