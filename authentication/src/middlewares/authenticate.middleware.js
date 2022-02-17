const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authenticate = async (req, res, next) => {
    try {
        // get token
        if ( !req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")){
            res.status(401).json({ msg: "Missing or Invalid token!" });
        }
        const token = req.headers.authorization.split("Bearer ")[1].trim();
        let userToken;
        // validate token
        try {
            userToken = jwt.verify(token, process.env.SECRET_KEY);
            // verify user
            const user = await User.findById(userToken.id);
            if ( !user ) return res.status(401).json({ msg: "Expired or Invalid token!" });
    
            // attach user to request
            req.user = user;
            next();
        } catch ( err ) {
            res.status(401).json({ msg: "Expired or Invalid token!" });
        }
    } catch (err){
        console.log(err)
        res.status(500).json({ msg: "Something went wrong!" });
    }
};

module.exports = authenticate;