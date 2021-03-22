const express = require('express');
const router = express.Router();
const ordersCtrl = require('../controllers/orders');

router.get('/', ordersCtrl.new);
router.post('/', ordersCtrl.create);
router.post('/confirm', ordersCtrl.confirm);


module.exports = router; 