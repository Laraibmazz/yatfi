const { reseller } = require("googleapis/build/src/apis/reseller");
var db = require("mongoose");
require("dotenv").config();

// Database connection

db.connect("mongodb+srv://rrr:Devel166x6@cluster0.keh3e.gcp.mongodb.net/alter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
con = db.connection;

// User shema

module.exports = schema = new db.Schema({
    name: String,
    email: String,
    pwd: String,
    BusinessName: String
});

User = db.model("Alter", schema, "alter");

// User model

module.exports = User