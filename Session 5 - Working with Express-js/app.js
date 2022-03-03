// const http = require('http'); // This line can be removed because we`re not using http anymore, we`re using express
const express = require('express');

const app = express();

//Next is a function that will allow chaining middlewares
//If you want to stop to request you can return a response, instead of calling next()
// app.use((request, response, next) => {
//     console.log('In the middleware!');
//     next(); //Allows the request to continue to next middleware in line
// })

//This middleware will be executed for following middlewares because it calls next()
app.use('/', (req, res, next) => {
    console.log('this always runs')
    next();
})

//This middleware will execute, return the response and second middleware will never be executed, that`s why this should be prior to the next one
app.use('/add-product', (request, response, next) => {
    console.log('In another the middleware!');
    response.send('<h1>Add Product</h1>');
})
app.use('/', (request, response, next) => {
    console.log('In another the middleware!');
    response.send('<h1>Hello from Express</h1>');
})

// const server = http.createServer(app);
// server.listen(3000);
//This does the same as two lines above
app.listen(3000);