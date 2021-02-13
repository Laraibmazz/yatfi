var mongoose = require("mongoose");
require("dotenv").config();

// Database connection

mongoose.connect("mongodb://127.0.0.1:27017/yatfi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// User shema

schema = new mongoose.Schema({
    name: String
});

User = mongoose.model("collection", schema, "collection");


// User model

module.exports = User
