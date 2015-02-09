// See
// http://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server
// for an explanation and some alternatives

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);
