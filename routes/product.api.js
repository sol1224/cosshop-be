const express = require("express");
const productController = require("../controller/product.controller");
const router = express.Router();

router.get("/", productController.getAllProduct);
router.post("/", productController.createProduct);
router.get("/:id", productController.getProductDetail);

module.exports = router;
