module.exports = (app) => {
    let DataContrlller = require('../controllers/DataContrlller')
    let appConfigController = require('../controllers/appConfigController')
    
    app.route('/').all(appConfigController.getVersion)

    app.route('/get/available/DataSet')
    .get(DataContrlller.getDataSet)

    app.route('/insertdata')
    .post(DataContrlller.insertData)

}