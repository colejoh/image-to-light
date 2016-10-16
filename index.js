var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();
var port = 8080;

// Sets up angular app
app.use(express.static(__dirname + '/frontend'));

// bodyParser to use for parsing JSON requests
app.use(bodyParser.json());

// Logs requests
app.use(logger('dev'));

// Direct Requests
//app.use('/', require('./api/controllers'));
var state = require('./app/state.js');
app.get('/api/v1', function(req, res){
    res.send({"hei": true});
});
app.get('/api/v1/state', function(req, res) {
    res.send({"hei": true});
});
app.put('/api/v1/state', state.update);

// Starts server
app.listen(port);
console.log("listening on port " + port + "...");
