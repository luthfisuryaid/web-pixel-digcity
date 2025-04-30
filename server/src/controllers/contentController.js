const { pool } = require('../config/db');

/**
 * Get homepage content
 * @route GET /api/content/homepage
 */
const getHomepageContent = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM content WHERE type = "homepage"'
    );
    
    res.status(200).json({ 
      success: true, 
      data: rows.length > 0 ? rows[0] : null 
    });
  } catch (error) {
    console.error('Error fetching homepage content:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server internal' 
    });
  }
};

/**
 * Get about page content
 * @route GET /api/content/about
 */
const getAboutContent = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM content WHERE type = "about"'
    );
    
    res.status(200).json({ 
      success: true, 
      data: rows.length > 0 ? rows[0] : null 
    });
  } catch (error) {
    console.error('Error fetching about content:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server internal' 
    });
  }
};

/**
 * Get organization structure
 * @route GET /api/content/organization
 */
const getOrganizationStructure = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM organization_members ORDER BY position_order'
    );
    
    res.status(200).json({ 
      success: true, 
      data: rows 
    });
  } catch (error) {
    console.error('Error fetching organization structure:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server internal' 
    });
  }
};

/**
 * Get all divisions
 * @route GET /api/content/divisions
 */
const getAllDivisions = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM divisions'
    );
    
    res.status(200).json({ 
      success: true, 
      data: rows 
    });
  } catch (error) {
    console.error('Error fetching divisions:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server internal' 
    });
  }
};

/**
 * Get division by ID
 * @route GET /api/content/divisions/:id
 */
const getDivisionById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const [divisionRows] = await pool.execute(
      'SELECT * FROM divisions WHERE id = ?',
      [id]
    );
    
    if (divisionRows.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Divisi tidak ditemukan' 
      });
    }
    
    // Get division programs
    const [programRows] = await pool.execute(
      'SELECT * FROM division_programs WHERE division_id = ?',
      [id]
    );
    
    // Get division members
    const [memberRows] = await pool.execute(
      'SELECT * FROM division_members WHERE division_id = ?',
      [id]
    );
    
    const division = {
      ...divisionRows[0],
      programs: programRows,
      members: memberRows
    };
    
    res.status(200).json({ 
      success: true, 
      data: division 
    });
  } catch (error) {
    console.error('Error fetching division by ID:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server internal' 
    });
  }
};

/**
 * Update content (admin only)
 * @route PUT /api/content/:type
 */
const updateContent = async (req, res) => {
  try {
    // In a real app, you would implement authentication middleware
    // to ensure only admins can access this endpoint
    
    const { type } = req.params;
    const { content_json } = req.body;
    
    // Validate input
    if (!content_json) {
      return res.status(400).json({ 
        success: false, 
        message: 'Konten tidak boleh kosong' 
      });
    }
    
    // Check if content exists
    const [existingRows] = await pool.execute(
      'SELECT id FROM content WHERE type = ?',
      [type]
    );
    
    let result;
    
    if (existingRows.length > 0) {
      // Update existing content
      [result] = await pool.execute(
        'UPDATE content SET content_json = ?, updated_at = NOW() WHERE type = ?',
        [content_json, type]
      );
    } else {
      // Insert new content
      [result] = await pool.execute(
        'INSERT INTO content (type, content_json) VALUES (?, ?)',
        [type, content_json]
      );
    }
    
    if (result.affectedRows) {
      return res.status(200).json({ 
        success: true, 
        message: 'Konten berhasil diperbarui'
      });
    } else {
      throw new Error('Failed to update content');
    }
  } catch (error) {
    console.error('Error updating content:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server internal' 
    });
  }
};

module.exports = {
  getHomepageContent,
  getAboutContent,
  getOrganizationStructure,
  getAllDivisions,
  getDivisionById,
  updateContent
};
