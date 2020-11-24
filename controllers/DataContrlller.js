'use strict'

module.exports = {
    getDataSet: (req, res, next) => {
        // let start_date;
        // let end_date
        // var lastSunday = new Date();
        // lastSunday.addDaysCustom(-lastSunday.getDay());
        // end_date = lastSunday.setHours(23,59,59,99);
        // end_date = new Date(end_date);
      
        // start_date = new  Date(lastSunday.getTime() -  (24 * 60 * 60 * 1000)  *  20);
        // start_date = start_date.setHours(0,0,0,0);
        // start_date = new Date(start_date);
            
      
        let DataManager = require('../managers/DataManager')
        DataManager.getDataSet().then((results) => {
            res.send(results)
        }).catch((error) => {
            next(error)
        })
    
    },

    insertData: (req, res, next) => {
        
        
        let city = req.body.city 
        let start_date = new Date(req.body.start_date)
        let end_date = new Date(req.body.end_date)
        let price = req.body.price
        let status = req.body.status
        let color = req.body.color

        let DataManager = require('../managers/DataManager')
        DataManager.insertData(city,start_date,end_date,price,status,color).then((results) => {
            res.send(results)
        }).catch((error) => {
            next(error)
        })
    
    },

  

}

