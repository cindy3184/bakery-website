//controller pulls data from the model into the views 
const Order = require('../models/order');


function confirm(req, res) {
    Order.findById(req.params.id).exec(function(err, orders) {
        console.log(orders);
        res.render('orders/confirm', { orders });
    })
    };

function newOrder(req, res) {
    res.render('orders/index');
};


function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === "") delete req.body[key];
    }

    Order.create(req.body, function (err, order) {
      if (err) return res.redirect("/orders");
      res.redirect(`/orders/${order._id}`); 
    });
  }
  
  

module.exports = {
    new: newOrder,
    create,
    confirm,
};