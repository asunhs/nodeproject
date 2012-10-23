var http = require('http');
var fs = require('fs');
var url = require('url');


function litsener(request, response) {
	var pathname = url.parse(request.url).pathname;
	if (pathname == '/') {
		fs.readFile('index.html', function (error, data) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		})
	}
	else {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end('<h1> Welcome '+ pathname.replace(/\//gi,' ') + '</h1>');
	}
}

http.createServer(litsener).listen(52273, function() {
	console.log('Server running at http://127.0.0.1:52273/');
});