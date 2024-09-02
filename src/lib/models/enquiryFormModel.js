const mongoose = require("mongoose");

const enquiryFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  message: String,
});

const EnquiryForm =
  mongoose.models.EnquiryForm ||
  mongoose.model("EnquiryForm", enquiryFormSchema);

module.exports = EnquiryForm;
