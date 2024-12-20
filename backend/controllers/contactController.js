const Contact = require('../models/contact');

const contactController = {
  createContact: async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Create new contact
      const newContact = new Contact({
        name,
        email,
        message
      });

      // Save to database
      await newContact.save();

      res.status(201).json({
        success: true,
        message: 'Message sent successfully',
        data: newContact
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error sending message',
        error: error.message
      });
    }
  }
};

module.exports = contactController;