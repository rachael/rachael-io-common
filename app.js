/**
 * Example app.js
 */

var express = require('express');
var app = module.exports = express();

require('./common')(app);

var routes = require('./routes/index');
app.use('/', routes);

require('./error-handler')(app);
