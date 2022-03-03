const path = require('path');   //Will allow using relative paths
const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    //path.join - will create a path, joining different segments based on current operational system
    //__dirname means current folder
    response.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;