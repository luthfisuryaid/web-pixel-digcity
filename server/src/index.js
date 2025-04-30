const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Import routes
const contactRoutes = require('./routes/contact');
const eventRoutes = require('./routes/events');
const contentRoutes = require('./routes/content');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/content', contentRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DigCity API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

module.exports = app;
