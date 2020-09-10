var express = require('express');
var request = require('request');

var app = express();

var urls = ['https://calingappreqs.herokuapp.com/']

app.get('/', function(req, res) {
    res.status(200).send({ alive: "true" });
});

setInterval(function() {
	
	urls.map(function(url){
			request(url, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body) 
			}
		});
	});
}, 5 * 1000 * 60) // 5 mins

app.listen(process.env.PORT || 3001);

