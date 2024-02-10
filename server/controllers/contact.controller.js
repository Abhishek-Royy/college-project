const Contact = require("../models/contact.model");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ msg: "Message send Successfully" });
  } catch (error) {
    res.status(400).json({ msg: "Error occur in Contact Controller", error });
  }
};

module.exports = contactForm;
