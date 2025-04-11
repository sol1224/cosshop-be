const Product = require("../model/Product");
const { params, search } = require("../routes");

const productController = {};

productController.createProduct = async (req, res) => {
  try {
    const { name, price, isOpen, category, color, size, detail, season, img } =
      req.body;
    const newProduct = new Product({
      name,
      price,
      isOpen,
      category,
      color,
      size,
      detail,
      season,
      img,
    });
    await newProduct.save();
    res.status(200).json({ status: "success", data: newProduct });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

productController.getAllProduct = async (req, res) => {
  try {
    const { searchQuery } = req.query;
    const cond = searchQuery
      ? { name: { $regex: searchQuery, $options: "i" } }
      : {};
    let query = Product.find(cond);

    const productList = await query.exec();

    res.status(200).json({ status: "success", data: productList });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

productController.getProductDetail = async (req, res) => {
  try {
    const productId = req.params.id;
    const item = await Product.findOne({ _id: productId });
    res.status(200).json({ status: "success", data: item });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

productController.getWomenProduct = async (req, res) => {
  try {
    const productList = await Product.find({ category: "women" });
    res.status(200).json({ status: "success", data: productList });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

productController.getManProduct = async (req, res) => {
  try {
    const productList = await Product.find({ category: "man" });
    res.status(200).json({ status: "success", data: productList });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

module.exports = productController;
