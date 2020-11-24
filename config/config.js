
const environment = process.env.NODE_ENV || 'dev';
const configuration = require(`../config/config.${environment}.json`);


global.gConfig= configuration;



module.exports = global.gConfig



