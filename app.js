/**
 * Example app.js
 */

var app = require('./common');

var routes = require('./routes/index');
app.use('/', routes);

var errorHandler = require('./error-handler');
app.use(errorHandler);

module.exports = app;
