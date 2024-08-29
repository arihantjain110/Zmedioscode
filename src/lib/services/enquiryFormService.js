const { EnquiryForm } = require("../models/enquiryFormModel");

const createEnquiryForm = async (data) => {
  const enquiryForm = new EnquiryForm(data);
  return enquiryForm.save();
};

const getAllEnquiryForms = async () => {
  return EnquiryForm.find({});
};

module.exports = {
  createEnquiryForm,
  getAllEnquiryForms,
};
