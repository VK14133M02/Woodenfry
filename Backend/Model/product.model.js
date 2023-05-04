const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String },
  brand: { type: String },
  image: { type: String },
  price: { type: Number },
  mrp: { type: Number },
  discount: { type: String },
  category: { type: String },
  sub_category: { type: String },
  in_stock: { type: Boolean },
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
