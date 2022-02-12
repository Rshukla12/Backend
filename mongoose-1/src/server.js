const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const userRouter = require("./routes/user.routes"); 
const PORT = 5000;

const app = express();

app.use(express.json());
app.use( cors() );
app.use("/user", userRouter);

const start = async () => {
    await connect();
    app.listen( PORT, () => {
        console.log("Listening on port:", PORT);
    });
};

module.exports = start;