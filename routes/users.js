var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/contact', function(req, res, next) {
  res.send('Contact page');
});

router.get('/dashboard', function(req, res, next) {
  res.send('Dashboard by get request');
});

router.post('/dashboard', function(req, res, next) {
  res.send('Dashboard by post request');
});

module.exports = router;
