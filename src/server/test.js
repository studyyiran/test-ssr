const http = require('http');
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.write('1')
    res.write('2')
    res.write('3')
    res.end('4')
}).listen(5001)