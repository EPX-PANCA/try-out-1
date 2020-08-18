const express = require("express");
const router = express.Router();

const ProductsInController = require("../controllers/ProductInController");
const middle = require("../middleware/middleAuth");

router.get("/", middle, ProductsInController.getProductAll);
router.get("/:id", middle, ProductsInController.getProduct);

router.post("/", middle, ProductsInController.saveProduct);

router.put("/:id", middle, ProductsInController.updateProduct);

router.delete("/:id", middle, ProductsInController.deleteProduct);

module.exports = router;
