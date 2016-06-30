var express = require('express');
var router = express.Router();

/* GET home page. Override me. */
router.get('/', function(req, res) {
  res.render('index.pug', { title: 'rachael-io-common' });
});

module.exports = router;
