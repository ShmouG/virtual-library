const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  First: { type: String, required: true },
  Last: { type: String, required: true },
  Phone: String,
  date: { type: Date, default: Date.now }
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
