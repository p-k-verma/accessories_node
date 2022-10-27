const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.route("/").post(productController.uploadUserexcel ,productController.uploadFile).get(productController.searchData)
router.route("/:id").get(productController.searchData)


module.exports = router;