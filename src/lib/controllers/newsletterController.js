// Import services for Newsletter
const {
  createNewsletter,
  getAllNewsletters,
} = require("../services/newsletterService");

// Newsletter Controllers
const createNewsletterController = async (req, res) => {
  try {
    const newsletter = await createNewsletter(req.body);
    res.status(201).json(newsletter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllNewslettersController = async (req, res) => {
  try {
    const newsletters = await getAllNewsletters();
    res.status(200).json(newsletters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export all controllers using module.exports
module.exports = {
  createNewsletterController,
  getAllNewslettersController,
};
