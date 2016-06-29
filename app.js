/**
 * Example app.js
 */

var express = require('express');
var app = express();

var common = require('./common');
app.use(common);

var routes = require('./routes/index');
app.use('/', routes);

var errorHandler = require('./error-handler');
app.use(errorHandler);

module.exports = app;
