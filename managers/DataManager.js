'use strict'

var SqlUtil = require('../util/sqlUtil')
let Logger = require('../util/logger')


module.exports = {

    getDataSet: () => {
        

        return new Promise((resolve, reject) => {

            let sql = 'select * from Data'
             
            SqlUtil.queryWithGenericErrorHandling(sql, null, reject, (error, results, fields) => {
                if (error) {
                    resolve(true)
                }
                else {

                    resolve(results);
                }
            })

        })
    },


    insertData: (city,start_date,end_date,price,status,color) => {

        return new Promise((resolve, reject) => {

            let sql = 'insert into Data(city,start_date,end_date,price,status,color) Values(?)'
              let params = [city,start_date,end_date,price,status,color]  
            SqlUtil.queryWithGenericErrorHandling(sql, [params], reject, (error, results, fields) => {
                if (error) {
                    resolve(true)
                }
                else {

                    resolve(results);
                }
            })

        })
    
    }

   


    



}



