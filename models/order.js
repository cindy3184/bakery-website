// model pulls data from database back to controller // make a js file in models for each collection in the database then you call it in from the route using res.render('index', { order: })


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new Schema({
  name: {
    type: String,
  },
  style: {
    type: String,
  },
  servings: {
    type: Number,
  },
  flavor: {
    type: String,
  },
  date: {
    type: Date, 
},
}); 

{
  timestamps: true 
};

module.exports = mongoose.model("Order", orderSchema);