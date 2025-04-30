const ContactModel = require('../models/contactModel');

/**
 * Submit a new contact form
 * @route POST /api/contact
 */
const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Mohon lengkapi semua field yang diperlukan' 
      });
    }
    
    // Create new contact submission using model
    const result = await ContactModel.create({ name, email, subject, message });
    
    if (result.success) {
      return res.status(201).json({ 
        success: true, 
        message: 'Pesan berhasil dikirim',
        id: result.id 
      });
    } else {
      throw new Error('Failed to insert contact submission');
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server internal' 
    });
  }
};

/**
 * Get all contact submissions (admin only)
 * @route GET /api/contact
 */
const getAllContacts = async (req, res) => {
  try {
    // In a real app, you would implement authentication middleware
    // to ensure only admins can access this endpoint
    
    const contacts = await ContactModel.getAll();
    
    res.status(200).json({ 
      success: true, 
      data: contacts 
    });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server internal' 
    });
  }
};

module.exports = {
  submitContactForm,
  getAllContacts
};
