var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var engines = require('consolidate');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var routes = require('./routes/index');

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

// routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.pug', {
      message: err.message,
      error: err,
      theme: 'error-theme dev-theme'
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error.pug', {
    message: err.message,
    error: { status: err.status },
    theme: 'error-theme'
  });
});

module.exports = app;
