const {
  createContactUs,
  getAllContactUsEntries,
} = require("../services/contactUsService");

const createContactUsController = async (req, res) => {
  try {
    const contactUs = await createContactUs(req.body);
    res.status(201).json(contactUs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllContactUsEntriesController = async (req, res) => {
  try {
    const contactUsEntries = await getAllContactUsEntries();
    res.status(200).json(contactUsEntries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createContactUsController,
  getAllContactUsEntriesController,
};
