const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Get all events
router.get('/', eventController.getAllEvents);

// Get upcoming events
router.get('/upcoming', eventController.getUpcomingEvents);

// Get single event by ID
router.get('/:id', eventController.getEventById);

// Create new event (admin only)
router.post('/', eventController.createEvent);

// Update event (admin only)
router.put('/:id', eventController.updateEvent);

// Delete event (admin only)
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
