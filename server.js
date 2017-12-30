"use strict";

var express = require("express");
var favicon = require('serve-favicon');
var path = require('path');
var app = express();
var moment = require('moment');

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(path.join(__dirname + 'css')));
app.use(express.static(__dirname + '/public'));

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});


app.get('/timestamp/:time', function(req, res) {

  // console.log('req.params:', req.params);
  var time = req.params.time;
  var resDate;

  if (time.match(/^\d{10}$/)) {
		time = parseInt(time);

		// console.log('time:', time);
		// console.log('moment(time):', moment(time));
    res.send({
      'unix': time,
      "natural": moment(time * 1e3).format('dddd, MMMM Do YYYY, h:mm:ss a')
    });
  } else res.send('Invalid timestamp');

});

app.get('/date/:date', function(req, res) {

  // console.log('req.params.date:', req.params.date);
	// console.log('full date:', req.params.date + ' 00:00:00 +0000');
  var date = moment(req.params.date + ' 00:00:00 +0000');

  // console.log('date:', date);
  // console.log('typeof date:', typeof date);

  if (date.isValid()) {

    res.send({
      'unix': date.unix(),
      "natural": date.format('dddd, MMMM Do YYYY, h:mm:ss a')
    });
  } else res.send('Invalid Date');

});

app.listen(app.get('port'), function() {
  console.log('Listening on port ', app.get('port'));
});
