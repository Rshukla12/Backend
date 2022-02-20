// users should have user_id, name, email, country 
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;