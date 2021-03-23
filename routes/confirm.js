// connect data info from order controller and out into here 

const ordersCtrl = require('../controllers/orders');

router.get('/orders/:id', ordersCtrl.confirm);