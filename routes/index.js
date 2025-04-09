const express = require("express");
const router = express.Router();
const productApi = require("./product.api");
const userApi = require("./user.api");
const authApi = require("./auth.api");

router.use("/product", productApi);
router.use("/user", userApi);
router.use("/auth", authApi);

module.exports = router;
