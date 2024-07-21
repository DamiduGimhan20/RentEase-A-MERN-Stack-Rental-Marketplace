
// Import the required modules
const mongoose = require('mongoose');

// Define the schema for an item
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true }, // The name of the item, required field
  description: { type: String, required: true }, // A description of the item, required field
  category: { type: String, required: true }, // The category the item belongs to, required field
  price: { type: Number, required: true }, // The price of the item, required field
  image: { type: String, required: true }, // A URL to the image of the item, required field
});


module.exports = mongoose.model('Item', itemSchema);
