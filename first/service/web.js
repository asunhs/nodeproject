var errorPage = require('./servlet/ErrorPage.js').ErrorPage;
var patterns = require('./configure/mvc/config.js').patterns;
var error = require('./configure/mvc/config.js').error;


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
	
	throw new Error(404, '404');
}


exports.errorHandler = function(code) {
	for (var index in error) {
		if (error[index].code === code) {
			return error[index].handler.func;
		}
	}
	
	return error[0].handler.func;
}