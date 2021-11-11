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
exports.gucci_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Gucci detail: ' + req.params.id);};
// Handle Gucci create on POST.

exports.gucci_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Gucci();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gucci_type":"goat", "cost":12, "size":"large"}
    document.Itemname = req.body.Itemname;
    document.Quantity = req.body.Quantity;
    document.price = req.body.price;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
}  
};
// Handle Costume delete form on DELETE.
exports.gucci_delete = function(req, res) {res.send('NOT IMPLEMENTED: Gucci delete DELETE ' + req.params.id);};
// Handle Costume update form on PUT.
exports.gucci_update_put = function(req, res) {res.send('NOT IMPLEMENTED: Gucci update PUT' + req.params.id);};

exports.gucci_view_all_Page= async function(req, res) 
{try
    {
        theGuccis= await Gucci.find();
        res.render('guccis', { title: 'Gucci Search Results', results: theGuccis });
    }
    catch(err)
    {res.status(500);
        res.send(`{"error": ${err}}`);
    }  };
