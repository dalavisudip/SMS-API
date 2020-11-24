var express = require('express');
var  MainConfig =  require("./config/config")
var port =  MainConfig.PORT
var app = express()
var xssFilter = require('x-xss-protection')
var xFrameOptions = require('x-frame-options')



app.use(xFrameOptions())


app.use(xssFilter())
 
app.disable( 'x-powered-by' ) ;

app.all('/*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
  res.header('Access-Control-Allow-Headers','Authorization, Origin, X-Requested-With,Content-Type,Accept,token')
  if (req.method == 'OPTIONS') {
    res.send(200).end()
  } else {
    next()
  }
});


app.use(express.json());
app.use(express.urlencoded());



var routes = require('./routes')
routes(app)


app.listen(port, () => {
  console.log(`SMS API`,port)
  
})