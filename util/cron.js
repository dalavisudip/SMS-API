'use strict'

var cron = require('node-cron')

var cronUtil = {



    UpdateParkingStatus:()=>{
        var Logger = require('./logger')
       
        var task = cron.schedule('0 19 * * *',function() {
            Logger.D('starting  workorder send job ')
            const parkingManager = require('../managers/parkingManager')
            parkingManager.UpdateParkingStatus().then(()=>{
                console.log('done1')
                Logger.D('Finished  Jobs')
            }).catch(()=>{
                console.log('done2')
                Logger.D('Error in  Jobs')
            })
        },true)
    },
    


}

module.exports = cronUtil