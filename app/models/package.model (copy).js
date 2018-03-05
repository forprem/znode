var mongoose = require('mongoose');

var PackageSchema = mongoose.Schema({
	znum: String,
	pos: {	
	    		x: Number,
	    		y: Number,
	   		z: Number
	    },	
	}, {
		timestamps: true
	});

module.exports = mongoose.model('Package', PackageSchema);
