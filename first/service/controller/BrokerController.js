var fs = require('fs');
var url = require('url');

var cache = null;


var load = function(mappings) {
	cache = {};
	
	for (var index = mappings.length; index--;) {
		console.log("Load " + mappings[index].action + ":" + mappings[index].forward);
		cache[mappings[index].action] = {parse:mappings[index].svc, forward:mappings[index].forward};
	}
}

var process = function(request, response) {
	if (cache == null) {
		load(require('../configure/mappings/test-mapping.js').mapping);
	}
	
	if (cache == null) {
		console.log("Cache is null");
	}

	var pathname = url.parse(request.url).pathname;
	var svc = cache[pathname];
	
	if (svc == undefined || svc == null) {
		throw new Error(404, '404');
	}
	
	var res = svc.parse();
	
	fs.readFile(svc.forward, function (error, data) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end(res+"<br>"+data);
	});
}

exports.BrokerController = function(request, response) {
	console.log('pre control');
	
	var pathname = url.parse(request.url).pathname;
	
	if (pathname.match(/\.do/)) {
		process(request, response);
	}
	
	console.log('post control');
	
	return false;
}