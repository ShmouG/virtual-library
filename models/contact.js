const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  First: { type: String, required: true },
  Last: { type: String, required: true },
  Phone: String,
  Email: String,
  Address: String,
  date: { type: Date, default: Date.now }
});

const Contacts = mongoose.model("Contacts", contactSchema);

module.exports = Contacts;
