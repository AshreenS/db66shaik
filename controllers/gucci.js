var Gucci = require('../models/gucci');
// List of all Costumes
//exports.gucci_list = function(req, res) {res.send('NOT IMPLEMENTED: Gucci list');};
exports.gucci_list = async function(req, res) 
{try
    {theGuccis = await Gucci.find();
        res.send(theGuccis);}
catch(err)
{
    res.status(500);
    res.send(`{"error": ${err}}`);
}  };
// for a specific Costume.
exports.gucci_detail = function(req, res) {res.send('NOT IMPLEMENTED: Gucci detail: ' + req.params.id);};
// Handle Costume create on POST.
exports.gucci_create_post = function(req, res) {res.send('NOT IMPLEMENTED: Gucci create POST');};
// Handle Costume delete form on DELETE.
exports.gucci_delete = function(req, res) {res.send('NOT IMPLEMENTED: Gucci delete DELETE ' + req.params.id);};
// Handle Costume update form on PUT.
exports.gucci_update_put = function(req, res) {res.send('NOT IMPLEMENTED: Gucci update PUT' + req.params.id);};
