var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var engines = require('consolidate');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());
app.engine('pug', engines.pug);
app.engine('html', engines.ejs);
app.use(logger('dev'));

// static files
app.use(express.static('./static'));

// views
app.set('views', [__dirname + '/views', __dirname + '/node_modules/rachael-io-common/views']);

module.exports = app;
