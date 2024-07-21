
const Item = require('../models/Item');

// Get all items from the database
exports.getItems = async (req, res) => {
  try {
    // Retrieve all items from the database
    const items = await Item.find();
    // Send the items as a JSON response
    res.json(items);
  } catch (error) {
    // If an error occurs, send a 500 status code with the error message
    res.status(500).json({ message: error.message });
  }
};

// Get a single item by its ID from the database
exports.getItem = async (req, res) => {
  try {
    // Find the item by its ID
    const item = await Item.findById(req.params.id);
    // If the item is not found, send a 404 status code with a not found message
    if (!item) return res.status(404).json({ message: 'Item not found' });
    // Send the item as a JSON response
    res.json(item);
  } catch (error) {
    // If an error occurs, send a 500 status code with the error message
    res.status(500).json({ message: error.message });
  }
};

// Create a new item in the database
exports.createItem = async (req, res) => {
  // Create a new item instance with the data from the request body
  const item = new Item(req.body);
  try {
    // Save the new item to the database
    const newItem = await item.save();
    // Send the newly created item as a JSON response with a 201 status code
    res.status(201).json(newItem);
  } catch (error) {
    // If an error occurs, send a 400 status code with the error message
    res.status(400).json({ message: error.message });
  }
};

// Update an existing item in the database by its ID
exports.updateItem = async (req, res) => {
  try {
    // Find the item by its ID and update it with the data from the request body
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // If the item is not found, send a 404 status code with a not found message
    if (!item) return res.status(404).json({ message: 'Item not found' });
    // Send the updated item as a JSON response
    res.json(item);
  } catch (error) {
    // If an error occurs, send a 400 status code with the error message
    res.status(400).json({ message: error.message });
  }
};

// Delete an item from the database by its ID
exports.deleteItem = async (req, res) => {
  try {
    // Find the item by its ID and delete it from the database
    const item = await Item.findByIdAndDelete(req.params.id);
    // If the item is not found, send a 404 status code with a not found message
    if (!item) return res.status(404).json({ message: 'Item not found' });
    // Send a success message as a JSON response
    res.json({ message: 'Item deleted' });
  } catch (error) {
    // If an error occurs, send a 500 status code with the error message
    res.status(500).json({ message: error.message });
  }
};
