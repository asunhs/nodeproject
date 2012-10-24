var fs = require('fs');
var url = require('url');

var process = function(request, response) {
	fs.readFile('web/html/login.html', function (error, data) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end(data);
	});
}

exports.BrokerController = function(request, response) {
	console.log('pre control');
	
	var pathname = url.parse(request.url).pathname;
	
	if (pathname.match(/\.do/)) {
		process(request, response);
	}
	else {
		return false;
	}
	
	console.log('post control');
}