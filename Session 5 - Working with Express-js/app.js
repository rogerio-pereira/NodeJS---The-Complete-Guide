// const http = require('http'); // This line can be removed because we`re not using http anymore, we`re using express
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Next is a function that will allow chaining middlewares
//If you want to stop to request you can return a response, instead of calling next()
// app.use((request, response, next) => {
//     console.log('In the middleware!');
//     next(); //Allows the request to continue to next middleware in line
// })

//This middleware will be executed for following middlewares because it calls next()
// app.use('/', (req, res, next) => {
//     console.log('this always runs')
//     next();
// });

//Register a middleware, this middleware will call next in the end
//This will parse html bodies
app.use(bodyParser.urlencoded({extended: false}));  //extended is required, so it will avoid a warning

//This middleware will execute, return the response and second middleware will never be executed, that`s why this should be prior to the next one
app.use('/add-product', (request, response, next) => {
    response.send("<form action='/product' method='POST'><input type='text' name='title' /> <button type='submit' >Add Product</button></form>");
});
app.use('/product', (req, res, next) =>  {
    // console.log(req.body)
    console.log(req.body.title)
    res.redirect('/');
});


app.use('/', (request, response, next) => {
    response.send('<h1>Hello from Express</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);
//This does the same as two lines above
app.listen(3000);