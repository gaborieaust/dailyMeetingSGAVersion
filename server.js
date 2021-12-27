

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/daily-meeting-angular'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
      '/dist/daily-meeting-angular/index.html'));});
app.get('/meeting', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/daily-meeting-angular/index.html'));});



app.listen(process.env.PORT || 8080);




console.log ('je suis ici')
console.log(__dirname)
