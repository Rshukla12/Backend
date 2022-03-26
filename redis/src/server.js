const express = require("express");
require("dotenv").config();

const connect = require("./config/db.config");
const client = require("./config/redis.config");

const app = express();

app.use( express.json() );


const PORT = process.env.PORT || 3000;

const productRouter = require("./routes/product.route");

app.use("/products", productRouter);

const start = async () => {
    try {
        await connect();
        await client.connect();
        app.listen(PORT, () => console.log('running on PORT 3000'));
    } catch ( err ) {
        console.log(err);
    }
};

module.exports = start;