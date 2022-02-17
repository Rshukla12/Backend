const express = require("express");
const dotenv = require("dotenv");
const connect = require("./config/db.config");

dotenv.config();

const postRouter = require("./routes/post.route");
const authRouter = require("./routes/auth.route");

const app = express();
const PORT = process.env.PORT || 5000;

app.use( express.json() );

app.use("/", authRouter);
app.use("/post", postRouter);

const start = async () => {
    await connect();
    app.listen(PORT, () => {
        console.log("server is running on port: ", PORT);
    });
};

module.exports = start;