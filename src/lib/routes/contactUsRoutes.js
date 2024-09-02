const express = require("express");
const {
  createContactUsController,
  getAllContactUsEntriesController,
} = require("../controllers/contactUsController");

const router = express.Router();

router.post("/", createContactUsController);
router.get("/", getAllContactUsEntriesController);

module.exports = router;
