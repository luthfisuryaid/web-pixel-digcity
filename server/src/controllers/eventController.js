const { pool } = require('../config/db');
const EventModel = require('../models/eventModel');

/**
 * Get all events
 * @route GET /api/events
 */
const getAllEvents = async (req, res) => {
  try {
    const events = await EventModel.getAll();
    
    res.status(200).json({ 
      success: true, 
      data: events 
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server internal' 
    });
  }
};

/**
 * Get single event by ID
 * @route GET /api/events/:id
 */
const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const event = await EventModel.getById(id);
    
    if (!event) {
      return res.status(404).json({ 
        success: false, 
        message: 'Event tidak ditemukan' 
      });
    }
    
    res.status(200).json({ 
      success: true, 
      data: event 
    });
  } catch (error) {
    console.error('Error fetching event by ID:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server internal' 
    });
  }
};

/**
 * Create new event (admin only)
 * @route POST /api/events
 */
const createEvent = async (req, res) => {
  try {
    // In a real app, you would implement authentication middleware
    // to ensure only admins can access this endpoint
    
    const { title, description, event_date, image_url, location } = req.body;
    
    // Validate input
    if (!title || !description || !event_date) {
      return res.status(400).json({ 
        success: false, 
        message: 'Mohon lengkapi semua field yang diperlukan' 
      });
    }
    
    // Create event using model
    const result = await EventModel.create({
      title,
      description,
      event_date,
      image_url,
      location
    });
    
    if (result.success) {
      return res.status(201).json({ 
        success: true, 
        message: 'Event berhasil dibuat',
        id: result.id 
      });
    } else {
      throw new Error('Failed to create event');
    }
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server internal' 
    });
  }
};

/**
 * Update event (admin only)
 * @route PUT /api/events/:id
 */
const updateEvent = async (req, res) => {
  try {
    // In a real app, you would implement authentication middleware
    // to ensure only admins can access this endpoint
    
    const { id } = req.params;
    const { title, description, event_date, image_url, location } = req.body;
    
    // Validate input
    if (!title || !description || !event_date) {
      return res.status(400).json({ 
        success: false, 
        message: 'Mohon lengkapi semua field yang diperlukan' 
      });
    }
    
    // Update event using model
    const result = await EventModel.update(id, {
      title,
      description,
      event_date,
      image_url,
      location
    });
    
    if (result.success && result.affectedRows > 0) {
      return res.status(200).json({ 
        success: true, 
        message: 'Event berhasil diperbarui'
      });
    } else {
      return res.status(404).json({ 
        success: false, 
        message: 'Event tidak ditemukan' 
      });
    }
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server internal' 
    });
  }
};

/**
 * Delete event (admin only)
 * @route DELETE /api/events/:id
 */
const deleteEvent = async (req, res) => {
  try {
    // In a real app, you would implement authentication middleware
    // to ensure only admins can access this endpoint
    
    const { id } = req.params;
    
    // Delete event using model
    const result = await EventModel.delete(id);
    
    if (result.success && result.affectedRows > 0) {
      return res.status(200).json({ 
        success: true, 
        message: 'Event berhasil dihapus'
      });
    } else {
      return res.status(404).json({ 
        success: false, 
        message: 'Event tidak ditemukan' 
      });
    }
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server internal' 
    });
  }
};

/**
 * Get upcoming events
 * @route GET /api/events/upcoming
 */
const getUpcomingEvents = async (req, res) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit) : 5;
    const events = await EventModel.getUpcoming(limit);
    
    res.status(200).json({ 
      success: true, 
      data: events 
    });
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server internal' 
    });
  }
};

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  getUpcomingEvents
};
