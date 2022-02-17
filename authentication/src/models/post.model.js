const mongoose = require("mongoose");
const User = require("./user.model");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;