const { Newsletter } = require("../models/newsletterModel");

const createNewsletter = async (data) => {
  const newsletter = new Newsletter(data);
  return newsletter.save();
};

const getAllNewsletters = async () => {
  return Newsletter.find({});
};

module.exports = {
  createNewsletter,
  getAllNewsletters,
};
