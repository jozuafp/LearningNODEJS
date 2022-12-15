var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello <b>World</b> <br>');
    res.write('Hello World <br>')
    res.write('<i>Hello</i> <u>World</u>');
    res.end();
}).listen(8000);

console.log("server running on http://localhost:8000");