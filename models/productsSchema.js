const mongosse = require("mongoose");

const productSchema = new mongosse.Schema({
  name: String,
  price: Number,
});

const Product = mongosse.model("products", productSchema);
module.exports = Product;
