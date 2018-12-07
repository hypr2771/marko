// The following line installs the Node.js require extension
// for `.marko` files.  This should be called once near the start
// of your application before requiring any `*.marko` files.
require('marko/node-require');

var http = require('http')
var hello = require('./components/hello')
var port = 8080

http.createServer((req, res) => {
  res.setHeader('content-type', 'text/html')

  hello.render({name: 'Markoq'}, res)
}).listen(port)
