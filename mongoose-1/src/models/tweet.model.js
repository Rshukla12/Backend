const mongoose = require("mongoose");

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
        type: String,
        required: true
    }
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;