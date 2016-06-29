var express = require('express');
var app = express();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

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
