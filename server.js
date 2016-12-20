var express = require("express");
var app = express();

app.get('/', function(req, res) {
   
   var time = req.query.time;
   
   res.send('The time is ' + time); 
});

app.listen(process.env.PORT, function() {
    console.log('Listening on port ' + process.env.PORT);
});