var fs = require('fs');

exports.DispatcherServlet = function(request, response) {
	fs.readFile('web/html/login.html', function (error, data) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end(data);
	})
}