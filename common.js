var express = require('express');
var app = express();

var engines = require('consolidate');
var compression = require('compression');
var logger = require('morgan');
var path = require('path');

// app
app.use(compression());
app.engine('pug', engines.pug);
app.engine('html', engines.ejs);
app.use(logger('dev'));

// static files
app.use(express.static('static'));
app.use(express.static('node_modules/rachael-io-common/static'));

// views - assumes installation location inside node_modules/
app.set('views', [
  path.join(__dirname, '/../../views'),
  path.join(__dirname, '/views')
]);

module.exports = app;
