var http = require('http');
var url = require('url');

var servletMapping = require('./web.js').servletMapping;


function application(request, response) {
	var servlet = servletMapping(url.parse(request.url).pathname);
	
	servlet(request, response);
}

http.createServer(application).listen(52273, function() {
	console.log('Server running at http://127.0.0.1:52273/');
});