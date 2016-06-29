var express = require('express');
var app = express();

app.set('views', __dirname + '/../views');

/* GET home page. Override me. */
app.get('/', function(req, res) {
  res.render('index.pug', { title: 'Common Files' });
});

module.exports = app;
