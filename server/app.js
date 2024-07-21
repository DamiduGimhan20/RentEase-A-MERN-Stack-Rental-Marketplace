// Import necessary modules
const express = require('express'); // Import the express library for creating the server
const mongoose = require('mongoose'); // Import the mongoose library for MongoDB interaction
const cors = require('cors'); // Import the cors library for enabling Cross-Origin Resource Sharing
const itemRoutes = require('./routes/itemRoutes'); // Import the item routes

// Create an Express application
const app = express();

// Enable CORS to allow requests from different origins
app.use(cors());
// Use express.json() middleware to parse JSON bodies in requests
app.use(express.json());

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/rentmarket', { 
  useNewUrlParser: true, // Use the new URL parser
  useUnifiedTopology: true // Use the new Server Discover and Monitoring engine
});

// Use the item routes for any requests to /api/items
app.use('/api/items', itemRoutes);

// Export the app for use in other files (e.g., starting the server)
module.exports = app;
