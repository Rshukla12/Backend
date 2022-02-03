const express = require("express");
const userRouter = express.Router();
const data = require("./UserData.json");

userRouter.get("/", (req, res) => {
    res.status(200).json(data);
});

userRouter.get("/:id", (req, res) => {
    try {
        const user = data.find( b => b.id == req.params.id );
        if ( !user ) throw new Error( "user id not found" );
        res.status(200).json({user});
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = userRouter;