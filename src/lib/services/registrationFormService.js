const { RegistrationForm } = require("../models/registrationFormModel");

const createRegistrationForm = async (data) => {
  const registrationForm = new RegistrationForm(data);
  return registrationForm.save();
};

const getAllRegistrationForms = async () => {
  return RegistrationForm.find({});
};


module.exports = {
  createRegistrationForm,
  getAllRegistrationForms,
};
