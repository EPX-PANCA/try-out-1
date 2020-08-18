const express = require("express");
const router = express.Router();

const ProductsController = require("../controllers/ProductController");
const middle = require("../middleware/middleAuth");

router.get("/", middle, ProductsController.getProductAll);
router.get("/:id", middle, ProductsController.getProduct);

router.post("/", middle, ProductsController.saveProduct);

router.put("/:id", middle, ProductsController.updateProduct);

router.delete("/:id", middle, ProductsController.deleteProduct);

module.exports = router;
