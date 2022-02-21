const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const connect = require("./config/db.config.js");

const userRouter = require("./routes/user.route");

const validator = require("./utils/validator");

const app = express();
const PORT = process.env.PORT || 5000;

app.use( express.json() );

app.use("/", ...validator, userRouter);

const start = async () => {
    await connect();
    app.listen( PORT, () => {
        console.log("Listening to port: ", PORT);
    });
};

module.exports = start;