
const Rental = require('../models/Rental');
const Item = require('../models/Item');

// Create a new rental
exports.createRental = async (req, res) => {
  try {
    // Extract itemId, startDate, and endDate from the request body
    const { itemId, startDate, endDate } = req.body;
    
    // Find the item by its ID
    const item = await Item.findById(itemId);
    // If the item is not found, send a 404 status code with a not found message
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Calculate the total cost of the rental
    const totalCost = calculateTotalCost(item.price, startDate, endDate);
    // Create a new rental instance with the provided data
    const rental = new Rental({
      item: itemId,
      startDate,
      endDate,
      totalCost,
    });

    // Save the new rental to the database
    const newRental = await rental.save();
    // Send the newly created rental as a JSON response with a 201 status code
    res.status(201).json(newRental);
  } catch (error) {
    // If an error occurs, send a 400 status code with the error message
    res.status(400).json({ message: error.message });
  }
};

// Get all rentals from the database
exports.getRentals = async (req, res) => {
  try {
    // Retrieve all rentals and populate the associated item field
    const rentals = await Rental.find().populate('item');
    // Send the rentals as a JSON response
    res.json(rentals);
  } catch (error) {
    // If an error occurs, send a 500 status code with the error message
    res.status(500).json({ message: error.message });
  }
};

// Function to calculate the total cost of a rental
function calculateTotalCost(pricePerDay, startDate, endDate) {
  // Convert startDate and endDate to Date objects
  const start = new Date(startDate);
  const end = new Date(endDate);
  // Calculate the difference in time between the start and end dates
  const differenceInTime = end.getTime() - start.getTime();
  // Convert the difference in time to days
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  // Calculate the total cost by multiplying the difference in days by the price per day
  return differenceInDays * pricePerDay;
}
