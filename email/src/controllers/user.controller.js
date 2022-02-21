const User = require("../models/user.model");
const sendMail = require("../utils/mailService");
const { validationResult } = require("express-validator");

const register = async (req, res) => {
    try {
        const errors = validationResult( req );
        if ( !errors.isEmpty() ) return res.status(400).json({ status: "failure", error: errors.array() });

        const user = await User.create( req.body );
        if ( !user ) return res.status(500).json({ status: "failure", msg: "Something went wrong while creating user!" });
        sendMail( user );
        res.status(200).json({ status: "success", msg: "Check mail" });
    } catch ( err ) {
        console.log(err);
        res.status(500).json({ status: "failure", msg: "Something went wrong!" });
    }
};

const userList = async ( req, res ) => {
    try {
        let page = req.query.page || 1;
        let perPage = req.query.per_page || 5;
        let skip = page <= 0 ? 0 : ( page - 1 ) * perPage;

        const user = await User.find().skip(skip).limit(perPage);
        if ( !user ) return res.status(404).json({ status: "success", msg: "No user found" });
        res.status(200).json({ status: "success", data: user });
    } catch ( err ) {
        console.log(err);
        res.status(500).json({ status: "failure", msg: "Something went wrong!" });
    }
}

module.exports = {
    register,
    userList
}