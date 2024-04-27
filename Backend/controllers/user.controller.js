const Product = require("../models/product.model");

async function sayHello(req, res) {
    res.send("Hello, World! This is your Express backend.");
}

module.exports = {
    sayHello,
};
