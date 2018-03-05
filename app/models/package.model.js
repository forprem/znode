var mongoose = require('mongoose');

var PackageSchema = mongoose.Schema({
	message_id: Number,
	epc_id: String,
	timestamp: String,
	confidence: Number,
	position: {	
	    		x: Number,
	    		y: Number,
	   		z: Number
	    },	
	}, {
		timestamps: true
	});

module.exports = mongoose.model('Package', PackageSchema);
