const Post = require("../models/post.model");

const getAllPost = async ( req, res ) => {
    try {
        // user is already authenticated
        const posts = await Post.find({});
        if ( !posts || !posts.length ) return res.status(404).json({msg: "No posts exists!"});
        res.status(200).json({ data: posts });
    } catch (err) {
        res.status(500).json({ msg: "Something went wrong!" });
    }
};

const createPost = async ( req, res ) => {
    try {
        // user is already authenticated
        // data is also validated
        const post = await Post.create({
            title: req.body.title,
            body: req.body.body,
            user: req.user._id
        });

        if ( !post ) return res.status(400).json({msg: "Post not created!"});

        res.status(201).json({msg: "Post created successsfully!", data: post});
    } catch ( err ) {
        res.status(500).json({msg: "Something went wrong!"});
    }
};

module.exports = {
    getAllPost,
    createPost
}