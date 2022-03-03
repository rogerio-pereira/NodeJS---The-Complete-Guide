const http = require('http');
const express = require('express');

const app = express();

//Next is a function that will allow chaining middlewares
//If you want to stop to request you can return a response, instead of calling next()
app.use((request, response, next) => {
    console.log('In the middleware!');
    next(); //Allows the request to continue to next middleware in line
})
app.use((request, response, next) => {
    console.log('In another the middleware!');
    //...
})

const server = http.createServer(app);

server.listen(3000);