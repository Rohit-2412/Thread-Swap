const express = require("express");

const { sayHello } = require("../controllers/user.controller");

const router = express.Router();

router.get("/hello", sayHello);

module.exports = router;
