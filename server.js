var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/user');
var db = process.env.MONGODB_URI || 'mongodb://localhost/data1';

mongoose.connect(db);

var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 8000;
app.listen(port);

console.log('app listening on', port);

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
});

app.get('/users', function(req, res, next) {
    // User.find(function(err, users){
    //     res.send(users);
    // });
    res.send('hello')
});

app.post('/users', function (req, res) {
    var user = new User(req.body);

    user.create(function(err, user){
        res.send(user);
    });
});