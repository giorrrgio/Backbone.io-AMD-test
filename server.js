var express = require('express'),
	mongoose = require('mongoose').connect('mongodb://localhost/test');

var app = express.createServer();

app.configure(function(){
	app.use(express.static('./app'));
});

var backboneio = require('backbone.io');

// Backend
var backend = backboneio.createBackend();
backend.use(backboneio.middleware.memoryStore());

var sio = backboneio.listen(app, { mybackend: backend });

app.get('/', function(req, res){
	res.send('<html><head><script src="/require-jquery.js" data-main="/main"></script></head><body><div id="test">Test</div></body></html>');
});

app.listen(80);
