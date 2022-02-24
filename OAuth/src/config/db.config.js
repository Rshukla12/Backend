const mongoose = require("mongoose");

const connect = () => mongoose.connect( process.env.MONGO_URI_1 );

module.exports = connect;