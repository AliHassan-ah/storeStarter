const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact-controller");
const contactSchema = require("../validators/contact-validator");
const validateContact = require("../middlewares/contact-middleware");

// const contactSchema = require("../models/contact-model")
router
  .route("/contact-us")
  .post(validateContact(contactSchema), contactController.contactForm);
module.exports = router;
