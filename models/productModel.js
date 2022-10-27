const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name of product"],
  },
  color: {
    type: String,
    required: [true, "Please provide the color of product"],
  },
  price: {
    type: Number,
    required: [true, "Please provide the price of product"]
  }
});

const product = mongoose.model('Product', productSchema)
module.exports = product