const User = require("../models/user.model");

const getAllUsers = async ( req, res ) => {
    try {
        const users = await User.find().select('-google_id');
        if ( !users.length ) return res.json({ status: "failed", msg: "No users exist!" });
        res.status(200).json({ status: "success",  users});
    } catch (err) {
        res.status(500).json({ status: "failed", msg: "something went wrong!" });
    }
};

const getUser = async ( req, res ) => {
    try {
        const user = await User.aggregate([
            {
                $addFields: {
                    id: {
                        $toString: '$_id'
                    }
                }
            },
            {
                $match: {
                    id: req.params.id
                }
            },
            {
                $lookup: {
                    localField: "_id",
                    foreignField: "author_id",
                    from: "posts",
                    as: "posts"
                }
            },
            {
                $project: {
                    _id: 0,
                    google_id: 0,
                    id: 0,
                    __v: 0
                }
            }
        ]);

        if ( !user ) return res.status(404).json({ status: "failed", msg: "user does not exists!" })
        res.status(200).json({ status: "success", user });

    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "failed", msg: "something went wrong!" });
    }
}
module.exports = {
    getAllUsers,
    getUser
};