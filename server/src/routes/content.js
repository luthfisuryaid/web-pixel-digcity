const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

// Get homepage content
router.get('/homepage', contentController.getHomepageContent);

// Get about page content
router.get('/about', contentController.getAboutContent);

// Get organization structure
router.get('/organization', contentController.getOrganizationStructure);

// Get all divisions
router.get('/divisions', contentController.getAllDivisions);

// Get division by ID
router.get('/divisions/:id', contentController.getDivisionById);

// Update content (admin only)
router.put('/:type', contentController.updateContent);

module.exports = router;
