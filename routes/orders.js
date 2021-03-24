const express = require('express');
const router = express.Router();
const ordersCtrl = require('../controllers/orders');

router.get('/', ordersCtrl.new);
router.get('/confirm', ordersCtrl.confirm);
router.post('/confirm', ordersCtrl.create);


module.exports = router; 