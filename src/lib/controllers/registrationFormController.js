const {
  createRegistrationForm,
} = require("../services/registrationFormService");

// const createRegistrationFormController = async (req, res) => {
//   console.log("Controller function called");
//   console.log("Zmedios - createRegistrationFormController - req:", req.body);
//   try {
//     const registrationForm = await createRegistrationForm(req.body);
//     console.log("Zmedios - createRegistrationFormController - registrationForm:", registrationForm);
//     res.status(201).json(registrationForm);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const createRegistrationFormController = async (req, res) => {
  console.log("Controller function called");
  res.status(200).send("Controller reached");
};

const getAllRegistrationFormsController = async (req, res) => {
  try {
    const registrationForms = await getAllRegistrationForms();
    res.status(200).json(registrationForms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createRegistrationFormController,
  getAllRegistrationFormsController,
};
