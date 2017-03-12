var path = require('path');
var express = require('express');

const app = express();


var port = process.env.PORT || 8000;
app.listen(port);

console.log('app listening on', port);

app.get('/', function(req, res, next) {
    return 'works'
});