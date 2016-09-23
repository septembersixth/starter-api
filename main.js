var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config.js');
var mongoose = require('mongoose');

var hello = require('./services/hello.js');

mongoose.connect(config.MONGODB_URI);
mongoose.Promise = global.Promise;

app.use(bodyParser.json());       // to support JSON-encoded bodiesh

app.use(function (req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  next();
});

app.get('/hello', hello);

app.listen(process.env.PORT || 8081, process.env.IP);