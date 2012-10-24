var controller = require('../configure/dispatcher-servlet.js').controller;

exports.DispatcherServlet = function(request, response) {
	for (var i = controller.length; i--;) {
		controller[i].controller(request, response);
	}
}
