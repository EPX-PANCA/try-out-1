const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UserController");
const middle = require("../middleware/middleAuth");

router.get("/", middle, UsersController.getUserAll);
router.get("/:id", middle, UsersController.getUser);

router.post("/", middle, UsersController.saveUser);

router.put("/:id", middle, UsersController.updateUser);

router.delete("/:id", middle, UsersController.deleteUser);

module.exports = router;
