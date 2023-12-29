const Contact = require("../models/contact-model");
const contactForm = async (req, res, next) => {
  try {
    const formResponse = req.body;
    await Contact.create(formResponse);
    res.json({
      msg: contactForm,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

module.exports = { contactForm };
