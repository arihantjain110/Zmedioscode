const { ContactUs } = require("../models/contactUsModel");

const createContactUs = async (data) => {
  const contactUs = new ContactUs(data);
  return contactUs.save();
};

const getAllContactUsEntries = async () => {
  return ContactUs.find({});
};

module.exports = {
  createContactUs,
  getAllContactUsEntries,
};
