var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  /* GET home page. */
  res.render('index', { title: 'SMART TRACKER DB' });
});

module.exports = router;