var express = require('express'),
	mongoose = require('mongoose').connect('mongodb://localhost/test');

var app = express.createServer();

app.get('/', function(req, res){
	res.send('Hello World');
});

app.listen(80);