var http = require("http");
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(80);

// Console will print the message
console.log('Server running at http://52.91.147.33/');

do{++x;console.log(x);}while(x<5);
