// // connect data info from order controller and out into here 
const express = require('express');
const router = express.Router();
const ordersCtrl = require('../controllers/orders');

router.get('/orders/confirm', ordersCtrl.confirm);

module.exports = router; 