var express = require('express');
var app = express();
var debug = require('debug');
var log = debug('server:log');

var port = process.env.PORT || 8080;

app.get('/', function(req, res){
    res.send('Hello World.....');
});

app.listen(port);
log('Express started on port ' + port);