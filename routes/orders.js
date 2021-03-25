const express = require('express');
const router = express.Router();
const ordersCtrl = require('../controllers/orders');

router.get('/', ordersCtrl.new);
router.get('/:id', ordersCtrl.confirm);
router.post('/:id', ordersCtrl.create);  // the link its gonna give you 
router.get('/:id/edit', ordersCtrl.edit);
router.delete('/:id', ordersCtrl.deleteOrder);
router.post('/:id', ordersCtrl.edit);
router.put('/:id', ordersCtrl.update);





module.exports = router; 