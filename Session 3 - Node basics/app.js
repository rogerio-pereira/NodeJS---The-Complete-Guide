const http = require('http');

//One way to do it is creating the function to handle requests and responses
// function rqListener(request, response){
// }
// http.createServer(rqListener);

const server = http.createServer((request, response) => {
    const url = request.url;

    if(url === '/') {
        response.write('<html>');
        response.write('<head><title>Enter Message</title></head>');
        response.write('<body><form action="/message" method="POST"><input type="text" /><button>Send</button></form></body>');
        response.write('</html>');
        return response.end();  //Return will make sure the code stops here
    }

    response.setHeader('Content-Type', 'text-html');
    response.write('<html>');
    response.write('<head><title>NEW NODE SERVER</title></head>');
    response.write('<body><h1>First Page</h1></body>');
    response.write('</html>');
    response.end();
    
});

server.listen(3000);