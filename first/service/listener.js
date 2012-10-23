function Listener(pattern, forward){
	this.pattern = pattern
	this.forward = forward
};

var patterns = [
	  new Listener('/', 'web/html/login.html')
	, new Listener(/\.do/, 'web/html/login.html')
	, new Listener('/hello.welcome', 'web/index.html')
];

exports.dispatch = function(url) {
	
	var pattern;
	for (var index in patterns) {
		pattern = patterns[index];
		
		console.log(pattern.pattern + ":" + typeof(pattern.pattern));
		
		if (typeof(pattern.pattern) === 'string'
			|| pattern.pattern instanceof String) {
			if (pattern.pattern === url) {
				return pattern.forward;
			}
		}
		else if (pattern.pattern instanceof RegExp) {
			if (url.match(pattern.pattern)) {
				return pattern.forward;
			}
		}
	}
	
	/*
	if (url === '/') {
		return 'web/html/login.html';
	}
	else if (url.match(/\.do/)) {
		return 'web/html/login.html';
	}
	*/

	return 'web/html/error.html';
}