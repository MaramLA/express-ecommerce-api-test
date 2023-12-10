const express = require("express");
const {
  getAllProcucts,
  createNewProduct,
} = require("../controllers/productController");
const router = express.Router();

router.get("/", getAllProcucts);
router.get("/", createNewProduct);

module.exports = router;
