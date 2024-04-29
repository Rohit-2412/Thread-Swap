const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    desc: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    price: {
        type: Number,
        required: true,
    },
    imageLink: {
        type: String,
        required: true,
    },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
