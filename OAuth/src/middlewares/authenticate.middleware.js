const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authenticate = async ( req, res, next ) => {
    try {
        const auth = req.headers.authorization;
        if ( !auth || !auth.startsWith("Bearer ")) return res.status(401).json({ status: "failed", msg: "improper or missing token!" });

        const token = auth.split("Bearer ")[1].trim();
        let userData;
        try {
            userData = jwt.verify( token, process.env.SECRET );
        } catch (err) {
            res.status(401).json({ status: "failed", msg: "Invalid or expired token!" });
        }

        const user = await User.findById(userData.id);
        if ( !user ) res.status(401).json({ status: "failed", msg: "Invalid or expired token!" });
        req.user = user;
        next();
    } catch ( err ) {
        res.status(500).json({ status: "failed", msg: "something went wrong while authenticating!" })
    }
};

module.exports = authenticate;