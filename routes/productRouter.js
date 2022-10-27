const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.route("/").post(productController.uploadUserexcel ,productController.uploadFile);


module.exports = router;