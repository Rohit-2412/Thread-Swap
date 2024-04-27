const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
const PORT = 6000;

mongoose
    .connect(
        "mongodb+srv://sonali:sonali@threadswaphub.hgpho6l.mongodb.net/ThreadSwapHub"
    )
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

//********************* User Details Schema *****************/
const Schema1 = mongoose.Schema;
const UserSchema = new Schema1({
    user_name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    contact: {
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
    },
    address: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    earning: {
        type: Number,
        default: 0,
    },
    cart: {
        type: [String],
        default: [],
    },
    orders: {
        type: [String],
        default: [],
    },
});
//************************************************************************************
app.get("/*", (req, res) => {
    res.send("You are on the wrong route. Here's the list of possible routes");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
