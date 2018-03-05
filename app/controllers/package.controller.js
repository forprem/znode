var Package = require('../models/package.model.js');

exports.create = function(req, res) {
    // Create and Save a new Package
	    if(!req.body.position.x) {
        res.status(400).send({message: "Package can not be empty"});
    }
   // var package = new Package({message_id: req.body.message_id || epc_id: req.body.epc_id || timestamp: req.body.timestamp || confidence: req.body.confidence || "Unznumd Package", x: req.body.position.x, y: req.body.position.y, z: req.body.position.z});

	var package = new Package({epc_id: req.body.epc_id || "Unznumd Package", x: req.body.position.x, y: req.body.position.y, z: req.body.position.z});

    package.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Package."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all packages from the database.
    Package.find(function(err, packages){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving packages."});
        } else {
            res.send(JSON.stringify({packages}));
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single package with a packageId
    Package.findById(req.params.packageId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve package with id " + req.params.packageId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a package identified by the packageId in the request
    Package.findById(req.params.packageId, function(err, package) {
        if(err) {
            res.status(500).send({message: "Could not find a package with id " + req.params.packageId});
        }

        package.message_id = req.body.message_id;
	package.epc_id = req.body.epc_id;
	package.timestamp = req.body.timestamp;
	package.confidence = req.body.confidence;
        package.x = req.body.position.x;
	package.y = req.body.position.y;
	package.z = req.body.position.z;

        package.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update package with id " + req.params.packageId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a package with the specified packageId in the request
    Package.remove({_id: req.params.packageId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete package with id " + req.params.id});
        } else {
            res.send({message: "Package deleted successfully!"})
        }
    });
};
