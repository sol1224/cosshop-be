const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  price: { type: Number, required: true },
  isOpen: { type: Boolean, required: true },
  category: { type: String, lowcase: true, enum: ["women", "man"] },
  color: { type: [String], required: true },
  size: { type: [String], required: true },
  detail: { type: [String], required: true },
  season: { type: String },
  img: { type: [String], required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
