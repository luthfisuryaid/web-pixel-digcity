const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Submit contact form
router.post('/', contactController.submitContactForm);

// Get all contact submissions (admin only)
router.get('/', contactController.getAllContacts);

module.exports = router;
