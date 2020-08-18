const express = require("express");
const router = express.Router();

const ProductsOutController = require("../controllers/ProductOutController");
const middle = require("../middleware/middleAuth");
router.get("/", middle, ProductsOutController.getProductAll);
router.get("/:id", middle, ProductsOutController.getProduct);

router.post("/", middle, ProductsOutController.saveProduct);

router.put("/:id", middle, ProductsOutController.updateProduct);

router.delete("/:id", middle, ProductsOutController.deleteProduct);

module.exports = router;
