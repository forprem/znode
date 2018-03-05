module.exports = function(app) {

    var packages = require('../controllers/package.controller.js');

    // Create a new Package
    app.post('/packages', packages.create);

    // Retrieve all Pacakges
    app.get('/packages', packages.findAll);

    // Retrieve a single Package with packageId
    app.get('/packages/:packageId', packages.findOne);

    // Update a Note with packageId
    app.put('/packages/:packageId', packages.update);

    // Delete a Note with packageId
    app.delete('/packages/:packageId', packages.delete);
}
