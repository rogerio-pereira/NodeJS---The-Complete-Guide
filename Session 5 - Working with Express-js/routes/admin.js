const express = require('express')

const router = express.Router();

router.get('/add-product', (request, response, next) => {
    response.send("<form action='/product' method='POST'><input type='text' name='title' /> <button type='submit' >Add Product</button></form>");
});
router.post('/product', (req, res, next) =>  { 
    console.log(req.body.title)
    res.redirect('/');
});

module.exports = router;