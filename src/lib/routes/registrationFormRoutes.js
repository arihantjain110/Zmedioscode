const express = require("express");

const {
  createRegistrationFormController,
  getAllRegistrationFormsController,
} = require("../controllers/registrationFormController");

const router = express.Router();

// router.post("/", createRegistrationFormController);

router.post("/", (req, res, next) => {
  console.log("Registration form route hit");
  next();
}, createRegistrationFormController);


router.get("/", getAllRegistrationFormsController);

module.exports = router;
