var express = require('express');
var bodyParser = require('body-parser');

// create express app
var app = express(),
port = process.env.PORT || 3000;


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.connect(dbConfig.url, {
    //useMongoClient: true
	auth: {
	user: 'ei-backend',
	password: 'FPztj4wn1ToNylWchNJIhplrvO7lrzHi3WKEvb87Itw4LOxBngtO2OQ8lp8fh4Ar14nzFauX6CCeoBSZgX5jnQ=='
	}
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to Packages application. Take package quickly. Organize and keep track of all your packages."});
});
// Require Notes routes
require('./app/routes/package.routes.js')(app);

// listen for requests
app.listen(port, function(){
    console.log("Server is listening on port from server or 3000");
});
