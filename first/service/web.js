var Servlet = require('./servlet/Servlet.js').Servlet;
var dispatcherServlet = require('./servlet/DispatcherServlet.js').DispatcherServlet;
var errorPage = require('./servlet/ErrorPage.js').ErrorPage;


var error = new Servlet("error", errorPage);


function ServletMapping(pattern, servlet){
	this.pattern = pattern
	this.servlet = servlet
};

var patterns = [
	  new ServletMapping('/', new Servlet("action", dispatcherServlet))
	, new ServletMapping(/\.do/, new Servlet("action", dispatcherServlet))
];

exports.servletMapping = function(url) {
	
	var pattern;
	for (var index in patterns) {
		pattern = patterns[index];
		console.log(pattern.pattern + ":" + typeof(pattern.pattern));
		
		if (typeof(pattern.pattern) === 'string'
			|| pattern.pattern instanceof String) {
			if (pattern.pattern === url) {
				return pattern.servlet.func;
			}
		}
		else if (pattern.pattern instanceof RegExp) {
			if (url.match(pattern.pattern)) {
				return pattern.servlet.func;
			}
		}
	}
	
	return error.func;
}