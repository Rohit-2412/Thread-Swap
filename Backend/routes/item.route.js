const express = require("express");

const { addItem } = require("../controllers/item.controller");

const router = express.Router();

router.post("/add", addItem);

module.exports = router;
