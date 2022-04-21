const mongoose = require("mongoose");

const shortenSchema = new mongoose.Schema({
    shortenUrl: {
        type: String,
        unique: true,
        required: true
    },
    originalUrl: {
        type: String,
        required: true
    },
    expiresIn: {
        type: Number,
        default: -1
    }
}, {
    timestamps: true
});

const Shorten = mongoose.model("Shorten", shortenSchema);

module.exports = Shorten;