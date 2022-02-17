const mongoose = require("mongoose");
const connect = async () => {
    return mongoose.connect(process.env.MONGO_URI_1);
};

module.exports = connect;