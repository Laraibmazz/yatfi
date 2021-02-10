var db = require("mongoose");
require("dotenv").config();

// Database connection

db.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
con = db.connection;

// User shema

module.exports = schema = new db.Schema({
    name: String,
    email: String,
    pwd: String,
});

// User model

module.exports = User = db.model("Alter", schema, "alter");

