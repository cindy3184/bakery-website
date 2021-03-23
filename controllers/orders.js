//controller pulls data from the model into the views 
const Order = require('../models/order');


function confirm(req, res) {
    Order.find({}, function(err, orders) {
        console.log(orders);
        res.render('orders/confirm', { orders });
    });
}

function newOrder(req, res) {
    res.render('orders/index');
};

// function create(req, res) {
//     Order.create(req.body, function(err, order) {
//         console.log(order);
//         res.redirect('/orders');
//     });
//     console.log(req.body)
// }


function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === "") delete req.body[key];
    }

    Order.create(req.body, function (err, order) {
      if (err) return res.redirect("/orders");
      res.redirect(`/orders/${order._id}`); //access ID property
    });
  }
  
  

module.exports = {
    new: newOrder,
    create,
    confirm,
};