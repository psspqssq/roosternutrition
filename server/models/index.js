const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

db.url = process.env.DBURL;
db.food = require("./food.model.js")(mongoose);
db.pen = require("./pen.model.js")(mongoose);
db.rooster = require("./rooster.model.js")(mongoose);

module.exports = db;
