const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const generateToken = ( user ) => {
    return jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.SECRET_KEY, {
        expiresIn: "1h"
    });
};

const signup = async (req, res) => {
    try {
        // check for same email
        const doesUserExist = await User.find({email: req.body.email});
        if ( doesUserExist && doesUserExist.length ) return res.status(400).json({msg: "Account with the provided email already exists!"});

        // create user
        const user = await User.create(req.body);
        if ( !user ) return res.status(400).json({msg: "Something went wrong! User not created!"});
        
        // generate token
        const token = generateToken(user);

        if ( !token ) res.status(500).json({msg: "Something went wrong!", err});

        // send result with token
        res.status(201).json({msg: "User created successfully!", data: {
            name: user.name,
            email: user.email,
            token: token
        }});
    } catch (err) {
        res.status(500).json({msg: "Something went wrong!", err});
    }
};

const signin = async ( req, res ) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if ( !user ) return res.status(401).json({msg: "Email or password is incorrect!"});
        
        const isSame = await user.comparePassword(req.body.password);
        if ( !isSame ) return res.status(401).json({msg: "Email or password is incorrect!"});
        
        // get data from token
        const token = generateToken(user);
        if ( !token ) res.status(500).json({msg: "Something went wrong!", err});

        // send result with token
        res.status(201).json({msg: "Sign in successful!", data: {
            name: user.name,
            email: user.email,
            token: token
        }});
    } catch (err) {
        res.status(500).json({msg: "Something went wrong!", err});
    }
};
module.exports = {
    signup,
    signin
};