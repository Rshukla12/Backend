// tweets - text, tags, author_id, no_of_likes, 
const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    no_of_likes: {
        type: Number,
        default: 0
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;