const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

const { validationResult } = require("express-validator");
const userValidator = require("../utils/userValidator");

router.get("/", async (req, res) => {
    try {
        const pageNo = req.query.page || 1;
        const perPage = req.query.per_page || 10;
        const skip = pageNo <= 0 ? 0 : ( pageNo - 1 ) * perPage;
        const users = await User.find().skip(skip).limit(perPage);
        if ( !users ) return res.status(404).json({msg: "No users found!"});
        res.status(200).json(users);
    } catch ( err ) {
        res.status(500).json({ msg: "something went wrong!" });
    }
});


router.get("/:userId", async (req, res) => {
    try {
        const user = await User.find({
            _id: req.params.userId
        });
        if ( !user ) return res.status(404).json({msg: "User not found!"});
        res.status(200).json(user);
    } catch ( err ) {
        res.status(500).json({ msg: "something went wrong!" });
    }
});


router.post("/", ...userValidator, async (req, res) => {
    try {
        const errors = validationResult(req);
        if ( !errors.isEmpty() ) return res.status(400).json({errors: errors.array()});
        
        const isUsernameUnique = await User.findOne({username: req.body.username});
        if ( isUsernameUnique ) return res.status(403).json({msg: "username is already taken!"})
        
        const doesUserExist = await User.findOne({email: req.body.email});
        if ( doesUserExist ) return res.status(403).json({msg: "user already exist!"})
        
        const user = await User.create({
            email: req.body.email,
            username: req.body.username
        });
        if ( !user ) throw Error("something went wrong while creating user!")
        res.status(201).json(user);
    } catch ( err ) {
        res.status(500).json({ msg: "something went wrong!" });
    }
});

router.patch("/:userId", userValidator[0], async (req, res) => {
    try {
        const errors = validationResult(req);
        if ( !errors.isEmpty() ) return res.status(400).json({errors: errors.array()});
        
        const isUsernameUnique = await User.findOne({username: req.body.username});
        if ( isUsernameUnique ) return res.status(403).json({msg: "username is already taken!"})

        const user = await User.findOneAndUpdate({
            _id: req.params.userId
        },{
            username: req.body.username
        },{
            returnOriginal: false
        });
        if ( !user ) return res.status(404).json({msg: "User not found!"});
        res.status(201).json(user);
    } catch ( err ) {
        res.status(500).json({ msg: "something went wrong!" });
    }
});

router.delete("/:userId", async (req, res) => {
    try {
        const user = await User.deleteOne({
            _id: req.params.userId
        });
        if ( !user ) return res.status(404).json({msg: "User not found!"});
        res.status(200).json({msg: "user deleted successfully!"});
    } catch ( err ) {
        res.status(500).json({ msg: "something went wrong!" });
    }
})

module.exports = router;