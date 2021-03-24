const express = require('express');
const router = express.Router();
const ordersCtrl = require('../controllers/orders');

router.get('/', ordersCtrl.new);
router.get('/:id', ordersCtrl.confirm);
router.post('/confirm', ordersCtrl.create);


module.exports = router; 