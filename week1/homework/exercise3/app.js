var http = require('http');
const fs = require('fs');

//create a server
let server = http.createServer(function(req, res) {
  if (req.url === '/script.js') {
    fs.readFile('script.js', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text\javascript' });
      res.write(data);
      res.end();
    });
    // res.setHeader('Content-Type', 'text/javascript');
    // res.write('Hello from script');
    // res.end();
  } else if (res.url === '/style.css') {
    fs.readFile('style.css', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text\css' });
      res.write(data);
      res.end();
    });
  }else {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text\html'});
      res.write(data);
      res.end();
    });
    // res.setHeader('Content-Type', 'text/html');
    // res.write(); //send a response back to the client
    // res.end(); //end the response
  }
});

server.listen(3000); //the server listens on port 3000
