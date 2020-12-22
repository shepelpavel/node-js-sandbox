const http = require('http');
const host = '127.0.0.1';
const port = 8080;

http.createServer(function (request, response) {

    response.end('Hello NodeJS!');

}).listen(port, host, function () {
    console.log('run server on ' + host + ':' + port);
});