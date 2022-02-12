const mongoose = require("mongoose");
const User = require("./user.model");

const tweetSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: [
        {
            type: String
        }
    ],
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: User,
        required: true
    }
});

const Tweet = mongoose.Model("Tweet", tweetSchema);

module.exports = Tweet;