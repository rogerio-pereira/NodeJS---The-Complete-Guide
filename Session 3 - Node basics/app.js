const http = require('http');
const routes = require('./routes');

// const server = http.createServer(routes); //When routes is a simple object
const server = http.createServer(routes.handler); //When routes is a complex object

console.log(routes.someText)    //Accessing complex object property

server.listen(3000);