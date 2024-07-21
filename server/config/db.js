// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using mongoose
    await mongoose.connect('mongodb://localhost:27017/rentmarket', {
      useNewUrlParser: true, // Use the new URL parser
      useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
    });
    // If the connection is successful, log a success message
    console.log('MongoDB connected successfully');
  } catch (error) {
    // If there is an error during connection, log the error and exit the process
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
