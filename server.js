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

app.get('/users', function(req, res, next) {
    // User.find(function(err, users){
    //     res.send(users);
    // });
    res.send('hello')
});

app.post('/users', function (req, res) {
    var user = new User();

    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.newClientPainPoint = req.body.newClientPainPoint;
    user.timeSpentOnboardin = req.body.timeSpentOnboardin;
    user.monthlyBudget = req.body.monthlyBudget;
    user.currentTools = req.body.currentTools;
    user.toolsEffective = req.body.toolsEffective;
    user.currentToolsLikesAndDislikes = req.body.currentToolsLikesAndDislikes;
    user.otherMethods = req.body.otherMethods;
    user.areasOfExpertiseMatch = req.bodyareasOfExpertiseMatch;
    user.solvesProblem = req.body.solvesProblem;
    user.additionalThoughts = req.body.additionalThoughts;

    user.create(function(err, user){
        res.send(user);
    });
});