var http = require('http');
var url = require('url');
var container = require('./web.js');


function application(request, response) {
	try {
		var pathname = url.parse(request.url).pathname;
		var servlet = container.servletMapping(pathname);
		
		servlet(request, response);
	}
	catch (err) {
		(container.errorHandler(err.number))(request, response);
	}
}

http.createServer(application).listen(52273, function() {
	console.log('Server running at http://127.0.0.1:52273/');
});