const http = require('http');

//One way to do it is creating the function to handle requests and responses
// function rqListener(request, response){
// }
// http.createServer(rqListener);

const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers);
    // process.exit(); //This will abort node execution

    response.setHeader('Content-Type', 'text-html');
    response.write('<html>');
    response.write('<head><title>NEW NODE SERVER</title></head>');
    response.write('<body><h1>First Page</h1></body>');
    response.write('</html>');
    response.end();
});

server.listen(3000);