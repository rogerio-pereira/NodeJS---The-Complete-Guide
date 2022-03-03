//Third-Party libraries
const express = require('express');
const bodyParser = require('body-parser');

//Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Create application
const app = express();

//Add parser to application
app.use(bodyParser.urlencoded({extended: false}));  //extended is required, so it will avoid a warning

//Add Routes
app.use('/admin', adminRoutes); //This will add a prefix to route
app.use(shopRoutes);

//Middleware for Error pages
//.use will work as a catchall, for all http methods (get, post, put, patch, delete)
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found!</h1>')
})

//Start server and listen to port 3000
app.listen(3000);