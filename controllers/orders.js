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
  
  function edit(req, res) {
    Order.findById(req.params.id, (err, orders) => {
        res.render('orders/edit', { orders });
    })
}


function deleteOrder(req, res) {
  Order.findByIdAndRemove(req.params.id, (err, deleteOrder => {
      res.redirect(`/orders/${deleteOrder._id}`)
  }))
}

function update(req, res) {
  Order.findByIdAndUpdate(req.params.id, req.body, (err, updateOrder) => {
      res.redirect(`/orders/${updateOrder._id}`);
  });
}



module.exports = {
    new: newOrder,
    create,
    confirm,
    deleteOrder,
    edit,
    update,
    
};