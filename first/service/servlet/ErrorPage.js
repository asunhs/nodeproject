var fs = require('fs');

exports.ErrorPage = function(request, response) {
	fs.readFile('web/html/error.html', function (error, data) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end(data);
	})
};