// const http = require('http'); // This line can be removed because we`re not using http anymore, we`re using express
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

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

/*
 * ==========================
 * Added to router/admin.js
 * ==========================
 */
//This middleware will execute, return the response and second middleware will never be executed, that`s why this should be prior to the next one
// app.use('/add-product', (request, response, next) => {
//     response.send("<form action='/product' method='POST'><input type='text' name='title' /> <button type='submit' >Add Product</button></form>");
// });
// app.use('/product', (req, res, next) =>  {   //Will enable this middleware for all requests
// app.get('/product', (req, res, next) =>  {   //Will enable this middleware only for get requests
// app.post('/product', (req, res, next) =>  {     //Will enable this middleware only for post requests
//     // console.log(req.body)
//     console.log(req.body.title)
//     res.redirect('/');
// });
app.use(adminRoutes);

/*
 * ==========================
 * Added to router/shop.js
 * ==========================
 */
// app.use('/', (request, response, next) => {
//     response.send('<h1>Hello from Express</h1>');
// });
app.use(shopRoutes);

// const server = http.createServer(app);
// server.listen(3000);
//This does the same as two lines above
app.listen(3000);