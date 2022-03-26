const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    available: Number,
    img: String,
    details: String
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;