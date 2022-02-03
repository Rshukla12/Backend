const express = require("express");
const cors = require("cors");

const userRouter = require("./Users/users.js");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.status(200).end("Welcome to Home page");
});

app.use("/users", userRouter);

app.listen(5000, () => {
    "server is running on 5000";
});