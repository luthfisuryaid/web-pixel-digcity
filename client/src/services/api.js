import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Contact API endpoints
export const contactAPI = {
  // Submit contact form
  submitForm: (formData) => {
    return api.post('/contact', formData);
  }
};

// Events API endpoints
export const eventsAPI = {
  // Get all events
  getAll: () => {
    return api.get('/events');
  },
  
  // Get event by ID
  getById: (id) => {
    return api.get(`/events/${id}`);
  }
};

// Content API endpoints
export const contentAPI = {
  // Get homepage content
  getHomepageContent: () => {
    return api.get('/content/homepage');
  },
  
  // Get about page content
  getAboutContent: () => {
    return api.get('/content/about');
  },
  
  // Get organization structure
  getOrganizationStructure: () => {
    return api.get('/content/organization');
  },
  
  // Get all divisions
  getAllDivisions: () => {
    return api.get('/content/divisions');
  },
  
  // Get division by ID
  getDivisionById: (id) => {
    return api.get(`/content/divisions/${id}`);
  }
};

export default api;
