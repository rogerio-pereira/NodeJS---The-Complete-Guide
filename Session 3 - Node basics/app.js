const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    if(url === '/') {
        response.write('<html>');
        response.write('<head><title>Enter Message</title></head>');
        response.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button>Send</button></form></body>');
        response.write('</html>');
        return response.end();  //Return will make sure the code stops here
    }

    if(url === '/message' && method === 'POST') {
        const body = [];

        request.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })

        return request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (error) => { 
                response.statusCode = 302;
                response.setHeader('Location', '/')
                return response.end();
            });   //Write file async
        })
    }

    response.setHeader('Content-Type', 'text-html');
    response.write('<html>');
    response.write('<head><title>NEW NODE SERVER</title></head>');
    response.write('<body><h1>First Page</h1></body>');
    response.write('</html>');
    response.end();
    
});

server.listen(3000);