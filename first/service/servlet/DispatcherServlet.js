var controller = require('../configure/mvc/dispatcher-servlet.js').controller;

exports.DispatcherServlet = function(request, response) {
	for (var i = controller.length; i--;) {
		if (controller[i].controller(request, response) !== false) {
			return;
		}
	}
	
	throw new Error(404, '404');
}
