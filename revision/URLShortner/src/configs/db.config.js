const mongoose = require("mongoose");

const connect = () => mongoose.connect(process.env.MONGO_URL1);

module.exports = connect;