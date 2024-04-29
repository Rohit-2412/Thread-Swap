const Item = require("../models/item.model");

async function addItem(req, res) {
    try {
        const { name, desc, price, imageLink } = req.body;
        console.log(name, desc, price, imageLink);
        const item = new Item({
            name,
            desc,
            price,
            imageLink,
        });
        await item.save();
        res.status(201).send(item);
    } catch (error) {
        res.status = 400;
        res.send(error);
    }
}

module.exports = {
    addItem,
};
