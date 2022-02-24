const Post = require("../models/post.model");

const getAllPosts = async (req, res) => {
    try {
        const result = await Post.find();
        if ( !result  || !result.length ) return res.status(404).json({ msg: "No post exists!" });
        res.status(200).json(result);
    } catch ( err ) {
        res.status(500).json({msg: "something went wrong while retrieving data!"});
    }
};

const getPost = async (req, res) => {
    try {
        const result = await Post.findById(req.params.id);
        if ( !result  ) return res.status(404).json({ msg: "Post does not exists!" });
        res.status(200).json(result);
    } catch ( err ) {
        res.status(500).json({msg: "something went wrong while retrieving data!"});
    }
};

const createPost = async (req, res) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            body: req.body.body,
            author_id: req.user._id 
        });
        if ( !post  ) return res.status(404).json({ msg: "Post does not exists!" });
        res.status(200).json(post);
    } catch ( err ) {
        res.status(500).json({msg: "something went wrong while retrieving data!"});
    }
};

const updatePost = async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);
        if ( !post ) res.status(404).json({ msg: "Post does not exists!" });

        // authorization check
        if ( post.author_id !== req.user._id ) res.status(403).json({ msg: "You are not authorized to edit this post!" });

        const update = {};

        if ( req.body.title ) update.title = req.body.title;
        if ( req.body.body ) update.body = req.body.body;

        const updatedPost = await Post.findOneAndUpdate({
            _id: post._id
        }, update, {
            returnOriginal: false
        });

        if ( !updatedPost  ) return res.status(500).json({ msg: "Something went wrong while updating the post!" });
        res.status(200).json(updatedPost);
    } catch ( err ) {
        res.status(500).json({msg: "something went wrong while retrieving data!"});
    }
};

const deletePost = async (req, res) => {
    try {
        
        const post = await Post.findById(req.params.id);
        if ( !post ) res.status(404).json({ msg: "Post does not exists!" });

        // authorization check
        if ( post.author_id !== req.user._id ) res.status(403).json({ msg: "You are not authorized to delete this post!" });

        const result = await Post.findByIdAndDelete(req.params.id);
        if ( !result  ) return res.status(500).json({ msg: "Something went wrong while updating the post!" });
        res.status(200).json({msg: "deleted successfully!"});
    } catch ( err ) {
        res.status(500).json({msg: "something went wrong while retrieving data!"});
    }
};

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};