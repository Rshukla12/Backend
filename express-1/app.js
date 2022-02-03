const express = require("express");

// middlewares
const cors = require("cors");
const recorder = require("./Middleware/recorder.js");

// routers
const booksRouter = require("./Books/books.js");

const app = express();
const PORT = 5000;

app.use( cors() );
app.use( express.json() );
app.use(recorder);

app.use("/", booksRouter);

app.listen(PORT, () => {
    console.log("server is running on 5000!");
})