var express = require('express');
const gucci_controlers= require('../controllers/gucci');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gucci', { title: 'Search Results Hand Bags' });
});

/* GET costumes */
router.get('/', gucci_controlers.gucci_view_all_Page );
module.exports = router;