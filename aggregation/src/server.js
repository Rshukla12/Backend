const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./config/db.config");

const userRouter = require("./routes/user.route");
const tweetRouter = require("./routes/tweet.route");

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/users", userRouter);
app.use("/tweets", tweetRouter);

const start = async () => {
    try {
        await connect();
        app.listen( PORT, () => {
            console.log("Listening on Port: ", PORT);
        });
    } catch ( err ) {
        console.log(err);
    }
}

module.exports = start;