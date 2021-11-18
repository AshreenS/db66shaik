var express = require('express');
const gucci_controlers= require('../controllers/gucci');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('gucci', { title: 'Search Results Hand Bags' });
// });

/* GET guccis */
router.get('/', gucci_controlers.gucci_view_all_Page);
module.exports = router;

// GET request for one gucci. 
router.get('/guccis/:id', gucci_controlers.gucci_detail); 

/* GET detail gucci page */ 
router.get('/detail', gucci_controlers.gucci_view_one_Page);

/* GET create gucci page */ 
router.get('/create', gucci_controlers.gucci_create_Page); 

/* GET create update page */ 
router.get('/update', gucci_controlers.gucci_update_Page);

/* GET create Gucci page */ 
router.get('/delete', gucci_controlers.gucci_delete_Page); 