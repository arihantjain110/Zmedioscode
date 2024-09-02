const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  service: String,
  message: String,
});

const ContactUs =
  mongoose.models.ContactUs || mongoose.model("ContactUs", contactUsSchema);

module.exports = ContactUs;
