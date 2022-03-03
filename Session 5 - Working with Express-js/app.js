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
app.use(adminRoutes);
app.use(shopRoutes);

//Start server and listen to port 3000
app.listen(3000);