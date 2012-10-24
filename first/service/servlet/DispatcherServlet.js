var BrokerController = require('../controller/BrokerController.js').BrokerController;

exports.DispatcherServlet = function(request, response) {
	BrokerController(request, response);
}
