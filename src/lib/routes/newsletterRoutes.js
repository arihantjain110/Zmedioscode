const express = require("express");
const {
  createNewsletterController,
  getAllNewslettersController,
} = require("../controllers/newsletterController");

const router = express.Router();

router.post("/", createNewsletterController);
router.get("/", getAllNewslettersController);

module.exports = router;
