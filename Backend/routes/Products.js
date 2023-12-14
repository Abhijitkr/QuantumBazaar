const express = require("express");
const router = express.Router();
const { createProduct, fetchAllProducts } = require("../controller/Product");

router.post("/", createProduct).get("/", fetchAllProducts);

exports.router = router;
