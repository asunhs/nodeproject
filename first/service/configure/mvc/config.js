var dispatcherServlet = require('../servlet/DispatcherServlet.js').DispatcherServlet;
var errorPage = require('../servlet/ErrorPage.js').ErrorPage;

exports.patterns = [
      { pattern: '/'      , servlet: {name:"action", func:dispatcherServlet} }
    , { pattern: /\.do/   , servlet: {name:"action", func:dispatcherServlet} }
    , { pattern: /\.login/, servlet: {name:"action", func:dispatcherServlet} }
];



exports.error = [
      { code: 404, handler: {name:"error", func:errorPage} }
    , { code: 500, handler: {name:"error", func:errorPage} }
];