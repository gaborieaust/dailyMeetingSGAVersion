const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname,'../dist/')));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname+'/dist/daily-meeting-angular/index.html'));
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);
