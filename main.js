var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config.js');

var hello = require('./services/hello.js');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(function (req, res, next){
  res.header('Access-Control-Allow-Origin', config.APP_ACCESS_CONTROLE_ALLOW_ORIGIN);
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get('/hello', hello);

app.listen(process.env.PORT || 8081, process.env.IP);