const mongoose = require("mongoose");

const registrationFormSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  mobile: String,
  technology: String,
  ndaCheck: Boolean,
  userType: {
    type: String,
    enum: ["individual", "company"],
  },
  companyName: {
    type: String,
    required: function () {
      return this.userType === "company";
    },
  },
  file: {
    filename: String,
    contentType: String,
    data: Buffer,
  },
});

const RegistrationForm =
  mongoose.models.RegistrationForm ||
  mongoose.model("RegistrationForm", registrationFormSchema);

module.exports = { RegistrationForm };
