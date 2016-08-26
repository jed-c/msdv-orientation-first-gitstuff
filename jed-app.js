
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('First day of doing git stuff! ☺ ☺ ☺ ☺ ☺ ☺ \n');
}).listen(process.env.PORT, process.env.IP);