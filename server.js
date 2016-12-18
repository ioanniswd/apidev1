var express = require("express");
var app = express();

console.log('hi');

app.get('/:time', function(req, res) {
   res.send('Hi there' + req.params.time); 
});

app.listen(8080, function() {
    console.log('Listening on port 8080');
});
