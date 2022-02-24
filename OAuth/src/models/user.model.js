const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    google_id: {
        type: String,
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;