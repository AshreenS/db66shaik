var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gucci', { title: 'Search Results for guccis' });
});

module.exports = router;