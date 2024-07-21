
// Import the necessary modules
const mongoose = require('mongoose');

// Define the schema for a rental
const rentalSchema = new mongoose.Schema({
  item: { 
    type: mongoose.Schema.Types.ObjectId, // Reference to the Item model
    ref: 'Item', // Name of the referenced model
    required: true, // This field is required
  },
  startDate: { type: Date, required: true }, // The start date of the rental, required field
  endDate: { type: Date, required: true }, // The end date of the rental, required field
  totalCost: { type: Number, required: true }, // The total cost of the rental, required field
});


module.exports = mongoose.model('Rental', rentalSchema);
