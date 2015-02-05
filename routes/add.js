var data = require("../data.json");

exports.addFriend = function(req, res) {   
    var newName = req.query.name;
    var desc = req.query.description;
    var img = 'http://lorempixel.com/400/400/people';

    var  newJS = {
    				"name": newName,
    				"description": desc,
    				"imageURL": img
    			};
    
    data["friends"].push(newJS);
    res.render('add'); 
	
 }