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
});

server.listen(3000);