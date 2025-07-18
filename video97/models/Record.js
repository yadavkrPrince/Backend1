const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

module.exports = mongoose.model("Record", recordSchema);
