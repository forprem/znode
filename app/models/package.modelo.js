var mongoose = require('mongoose');

var PackageSchema = mongoose.Schema({
    znum: String,
    coordinatesx: String,
    coordinatesy: String,
    coordinatesz: String	
}, {
    timestamps: true
});

module.exports = mongoose.model('Package', PackageSchema);
