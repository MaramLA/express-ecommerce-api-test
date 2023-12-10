const express = require("express");
const { getAllProcucts } = require("../controllers/productController");
const router = express.Router();

router.get("/", getAllProcucts);

module.exports = router;
