// Import the required modules
const express = require('express');
// Create a new router instance
const router = express.Router();
// Import the item controller to handle the request logic
const itemController = require('../controllers/itemController');

// Define a route to get all items
router.get('/', itemController.getItems);
// Define a route to get a single item by its ID
router.get('/:id', itemController.getItem);
// Define a route to create a new item
router.post('/', itemController.createItem);
// Define a route to update an existing item by its ID
router.put('/:id', itemController.updateItem);
// Define a route to delete an item by its ID
router.delete('/:id', itemController.deleteItem);

module.exports = router;
