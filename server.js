var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

var app = express();
var db = require('./config/db');
var port = process.env.PORT || 8080;

mongoose.connect(db.url);

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

// Serve backend API
require('./server/routes')(app);

// Serve angular
app.get('*', function(req, res) {
  res.sendFile('public/views/index.html', { 'root': __dirname });
});

app.listen(port)
console.log('Listening on port ' + port);

exports = module.exports = app;
