var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/megaHelloWorld', function (req, res) {
  res.send('Got a GET request');
});

app.post('/megaHelloWorld', function (req, res) {
  res.send('Got a POST request');
});

app.put('/megaHelloWorld', function (req, res) {
  res.send('Got a PUT request at /megaHelloWorld');
});

app.delete('/megaHelloWorld', function (req, res) {
  res.send('Got a DELETE request at /megaHelloWorld');
});

app.use(express.static(__dirname + '/Ajax'))



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});