exports.mapping = [
	{action:'/hello.do', svc:require('../../com/asunhs/hello/hello.js').parse, forward:'web/html/login.html'}
];