var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var gucci_controller = require('../controllers/gucci');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a gucci.
router.post('/guccis', gucci_controller.gucci_create_post);
// DELETE request to delete gucci.
router.delete('/guccis/:id', gucci_controller.gucci_delete);
// PUT request to update gucci.
router.put('/guccis/:id',
gucci_controller.gucci_update_put);
// GET request for one gucci.
router.get('/guccis/:id', gucci_controller.gucci_detail);
// GET request for list of all gucci items.
router.get('/guccis', gucci_controller.gucci_list);
module.exports = router;