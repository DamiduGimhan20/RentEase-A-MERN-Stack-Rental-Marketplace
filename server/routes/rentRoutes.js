// Import the required modules
const express = require('express');
// Create a new router instance
const router = express.Router();
// Import the rent controller to handle the request logic
const rentController = require('../controllers/rentController');

// Define a route to create a new rental
router.post('/', rentController.createRental);
// Define a route to get all rentals
router.get('/', rentController.getRentals);

module.exports = router;
