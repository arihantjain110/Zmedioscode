const express = require("express");
const {
  createEnquiryFormController,
  getAllEnquiryFormsController,
} = require("../controllers/enquiryFormController");

const router = express.Router();

router.post("/", createEnquiryFormController);
router.get("/", getAllEnquiryFormsController);

module.exports = router;
