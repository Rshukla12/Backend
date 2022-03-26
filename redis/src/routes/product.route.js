const express = require("express");

const router = express.Router();

const productController = require("../controllers/product.controller");

router.get("/", productController.getAllProducts);

router.post("/", productController.newProduct);

router.get("/:id", productController.getOneProduct);

router.patch("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;