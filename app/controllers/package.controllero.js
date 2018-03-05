var Package = require('../models/package.model.js');

exports.create = function(req, res) {
    // Create and Save a new Package
	    if(!req.body.coordinatesx) {
        res.status(400).send({message: "Package can not be empty"});
    }
    var package = new Package({znum: req.body.znum || "Unznumd Package", coordinatesx: req.body.coordinatesx, coordinatesy: req.body.coordinatesy, coordinatesz: req.body.coordinatesz});

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
            res.send(packages);
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

        package.znum = req.body.znum;
        package.coordinatesx = req.body.coordinatesx;
	package.coordinatesy = req.body.coordinatesy;
	package.coordinatesz = req.body.coordinatesz;

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
