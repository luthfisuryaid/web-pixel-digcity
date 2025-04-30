const { pool } = require('../config/db');

/**
 * Contact model for handling contact form submissions
 */
class ContactModel {
  /**
   * Create a new contact form submission
   * @param {Object} data - Contact form data
   * @returns {Promise} - DB operation result
   */
  static async create(data) {
    const { name, email, subject, message } = data;
    
    try {
      const [result] = await pool.execute(
        'INSERT INTO contact_submissions (name, email, subject, message) VALUES (?, ?, ?, ?)',
        [name, email, subject, message]
      );
      
      return {
        success: true,
        id: result.insertId
      };
    } catch (error) {
      console.error('Error in ContactModel.create:', error);
      throw error;
    }
  }
  
  /**
   * Get all contact submissions
   * @returns {Promise} - Contact submissions
   */
  static async getAll() {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM contact_submissions ORDER BY created_at DESC'
      );
      
      return rows;
    } catch (error) {
      console.error('Error in ContactModel.getAll:', error);
      throw error;
    }
  }
  
  /**
   * Get contact submission by ID
   * @param {number} id - Contact submission ID
   * @returns {Promise} - Contact submission
   */
  static async getById(id) {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM contact_submissions WHERE id = ?',
        [id]
      );
      
      return rows[0] || null;
    } catch (error) {
      console.error('Error in ContactModel.getById:', error);
      throw error;
    }
  }
  
  /**
   * Mark contact submission as read
   * @param {number} id - Contact submission ID
   * @returns {Promise} - DB operation result
   */
  static async markAsRead(id) {
    try {
      const [result] = await pool.execute(
        'UPDATE contact_submissions SET is_read = true WHERE id = ?',
        [id]
      );
      
      return {
        success: true,
        affectedRows: result.affectedRows
      };
    } catch (error) {
      console.error('Error in ContactModel.markAsRead:', error);
      throw error;
    }
  }
}

module.exports = ContactModel;
