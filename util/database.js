var mysql = require("mysql")

var poolInstance

var connectionPool = {
    getConnection: (cb) => {
        return connectionPool.getPool().getConnection(cb)
    },

    getPool: () => {
        if (poolInstance == null) {
            var config = require("../config").dbConfig
            poolInstance = mysql.createPool(config)
        } else {
            var connectionLength = poolInstance._allConnections.length
            for (var i = 0; i < connectionLength; i++) {
                var connection = poolInstance._allConnections[i]
                if (connection != undefined && connection.state === "protocol_error") {
                    connection.destroy()
                }
            }
        }
        return poolInstance
    },

    getOpenConnectionLength: () => {
        return connectionPool.getPool()._allConnections.length
    }
};

module.exports = connectionPool