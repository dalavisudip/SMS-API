'use strict'

let db = require('../util/database')

const Logger = require('../util/logger')

module.exports = {
    query(sql, params, callback) {
        db.getConnection((cnError, connection) => {
            if(cnError){
                callback(cnError, [], [])
            } else {
                var query = connection.query(sql, params, (error, results, fields) => {
                    Logger.D('raw query: ' + query.sql)
                    callback(error, results, fields)
                    connection.destroy()
                })
            }
        })
    },

    queryWithGenericErrorHandling(sql, params, reject, callback) {
        this.query(sql, params, (error, results, fields) => {
            if (error) {
                Logger.E(error)
                reject('Database Error')
            } else {
                callback(error, results, fields)
            }
        })
    }

}