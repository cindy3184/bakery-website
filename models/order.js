// model pulls data from database back to controller // make a js file in models for each collection in the database then you call it in from the route using res.render('index', { order: })

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const orderSchema = new Schema({
  Style: String,
  Servings: {
    type: Number,
    require: true,
  },
  Flavor: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
  },
  dropdown: {
    type: Date,
    label : "service",
    autoform : {
        options: function(){
          var doc = orders.findOne();
          var docOptions = doc && doc.options;
          return _.map(docOptions, function(value){
            return {
              label: value,
              value: value
            };
          });
        }
      }
    }
  }, {
  timestamps: true,
});


module.exports = mongoose.model('Order', orderSchema);