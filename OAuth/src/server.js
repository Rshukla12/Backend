const express = require("express");
require("dotenv").config();
const passport = require("passport");

const connect = require("./config/db.config.js");
const authRouter = require("./routes/auth.route")
const postRouter = require("./routes/post.route")
const userRouter = require("./routes/user.route")

const app = express();
const port = 3000;

app.use( passport.initialize() );
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user); 
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    done(err, id);
});

app.use('/auth', authRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);


const start = async () => {
    await connect();
    app.listen(port, () => {
        console.log("listening on port: ", port);
    });
};

module.exports = start;