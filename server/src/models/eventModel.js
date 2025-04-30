const { pool } = require('../config/db');

/**
 * Event model for handling events data
 */
class EventModel {
  /**
   * Get all events
   * @returns {Promise} - Events data
   */
  static async getAll() {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM events ORDER BY event_date DESC'
      );
      
      return rows;
    } catch (error) {
      console.error('Error in EventModel.getAll:', error);
      throw error;
    }
  }
  
  /**
   * Get event by ID
   * @param {number} id - Event ID
   * @returns {Promise} - Event data
   */
  static async getById(id) {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM events WHERE id = ?',
        [id]
      );
      
      return rows[0] || null;
    } catch (error) {
      console.error('Error in EventModel.getById:', error);
      throw error;
    }
  }
  
  /**
   * Create a new event
   * @param {Object} eventData - Event data
   * @returns {Promise} - DB operation result
   */
  static async create(eventData) {
    const { title, description, event_date, image_url, location } = eventData;
    
    try {
      const [result] = await pool.execute(
        'INSERT INTO events (title, description, event_date, image_url, location) VALUES (?, ?, ?, ?, ?)',
        [title, description, event_date, image_url, location]
      );
      
      return {
        success: true,
        id: result.insertId
      };
    } catch (error) {
      console.error('Error in EventModel.create:', error);
      throw error;
    }
  }
  
  /**
   * Update an existing event
   * @param {number} id - Event ID
   * @param {Object} eventData - Updated event data
   * @returns {Promise} - DB operation result
   */
  static async update(id, eventData) {
    const { title, description, event_date, image_url, location } = eventData;
    
    try {
      const [result] = await pool.execute(
        'UPDATE events SET title = ?, description = ?, event_date = ?, image_url = ?, location = ? WHERE id = ?',
        [title, description, event_date, image_url, location, id]
      );
      
      return {
        success: true,
        affectedRows: result.affectedRows
      };
    } catch (error) {
      console.error('Error in EventModel.update:', error);
      throw error;
    }
  }
  
  /**
   * Delete an event
   * @param {number} id - Event ID
   * @returns {Promise} - DB operation result
   */
  static async delete(id) {
    try {
      const [result] = await pool.execute(
        'DELETE FROM events WHERE id = ?',
        [id]
      );
      
      return {
        success: true,
        affectedRows: result.affectedRows
      };
    } catch (error) {
      console.error('Error in EventModel.delete:', error);
      throw error;
    }
  }
  
  /**
   * Get upcoming events
   * @param {number} limit - Maximum number of events to return
   * @returns {Promise} - Upcoming events
   */
  static async getUpcoming(limit = 5) {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM events WHERE event_date >= CURDATE() ORDER BY event_date ASC LIMIT ?',
        [limit]
      );
      
      return rows;
    } catch (error) {
      console.error('Error in EventModel.getUpcoming:', error);
      throw error;
    }
  }
}

module.exports = EventModel;
