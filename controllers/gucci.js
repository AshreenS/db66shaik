var Gucci = require('../models/gucci');
// List of all Costumes
//exports.gucci_list = function(req, res) {res.send('NOT IMPLEMENTED: Gucci list');};
exports.gucci_list = async function (req, res) {
    try {
        theGuccis = await Gucci.find();
        res.send(theGuccis);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Costume.
exports.gucci_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Gucci detail: ' + req.params.id);
};
// Handle Gucci create on POST.

exports.gucci_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Gucci();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gucci_type":"goat", "cost":12, "size":"large"}
    document.Itemname = req.body.Itemname;
    document.Quantity = req.body.Quantity;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume delete form on DELETE.
exports.gucci_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Gucci.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Costume update form on PUT.
exports.gucci_update_put = function (req, res) { res.send('NOT IMPLEMENTED: Gucci update PUT' + req.params.id); };

exports.gucci_view_all_Page = async function (req, res) {
    try {
        theGuccis = await Gucci.find();
        res.render('guccis', { title: 'Gucci Search Results', results: theGuccis });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Gucci. 
exports.gucci_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Gucci.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};





//Handle Gucci update form on PUT. 
exports.gucci_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Gucci.findById(req.params.id)
        // Do updates of properties 
        if (req.body.Itemname)
            toUpdate.Itemname = req.body.Itemname;
        if (req.body.Quantity) toUpdate.Quantity = req.body.Quantity;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`);
    }
};

// Handle a show one view with id specified by query 
exports.gucci_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Gucci.findById(req.query.id)
        res.render('guccidetail',
            { title: 'Gucci Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a gucci. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.gucci_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('guccicreate', { title: 'Gucci Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a Gucci. 
// query provides the id 
exports.gucci_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Gucci.findById(req.query.id)
        res.render('gucciupdate', { title: 'Gucci Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle a delete one view with id from query 
exports.gucci_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Gucci.findById(req.query.id) 
        res.render('guccidelete', { title: 'Gucci Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 



