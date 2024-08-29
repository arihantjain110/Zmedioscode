// Import services for Enquiry Form
const {
  createEnquiryForm,
  getAllEnquiryForms,
} = require("../services/enquiryFormService");

// Enquiry Form Controllers
const createEnquiryFormController = async (req, res) => {
  try {
    const enquiryForm = await createEnquiryForm(req.body);
    res.status(201).json(enquiryForm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllEnquiryFormsController = async (req, res) => {
  try {
    const enquiryForms = await getAllEnquiryForms();
    res.status(200).json(enquiryForms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export all controllers using module.exports
module.exports = {
  createEnquiryFormController,
  getAllEnquiryFormsController,
};
