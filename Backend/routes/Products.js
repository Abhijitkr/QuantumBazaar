const express = require("express");
const router = express.Router();
const {
  createProduct,
  fetchAllProducts,
  fetchProductById,
} = require("../controller/Product");

router
  .post("/", createProduct)
  .get("/", fetchAllProducts)
  .get("/:id", fetchProductById);

exports.router = router;
