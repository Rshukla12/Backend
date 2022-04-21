const express = require("express");
const cors = require("cors");
const connect = require("./configs/db.config");

const urlRouter = require("./routes/url.route");

const PORT = 5000;

const app = express();
app.use(express.json());
app.use( cors() );

app.use("/url", urlRouter);

const start = async () => {
    await connect();
    app.listen( PORT, () => {
        console.log("Listening on port:", PORT);
    });
};

start();