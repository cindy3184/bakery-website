const express = require('express');
const router = express.Router(); //access express router 
const ordersCtrl = require('../controllers/orders');



 

router.get('/', (req, res) => {
    res.render('index')
});



module.exports = router; 