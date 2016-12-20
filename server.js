var express = require("express");
var path = require('path');
var app = express();

//app.use(express.static(path.join(__dirname + 'css')));

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/:time', function(req, res) {

	var time = req.params.time;
	var resDate;

	if(Number(time)) {
		if(new Date(time*1000).getTime() > 0) {
			resDate = {'unix': time, "natural": new Date(time*1000).toUTCString()};
		}

	} else {
		if(Date.parse(time)) {
			var tempDate = new Date(time);
			resDate = {'unix': tempDate.getTime()/1000, "natural": tempDate.toUTCString()};

		} else {
			resDate = {"unix": null, "natural": null};
		}
	}

	res.send(resDate);



});

app.listen(8080, function() {
    console.log('Listening on port 8080');
});