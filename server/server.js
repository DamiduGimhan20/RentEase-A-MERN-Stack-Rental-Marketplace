
const app = require('./app');

// Define the port on which the server will listen
// Use the port specified in the environment variable PORT, or default to 5000
const port = process.env.PORT || 5000;

// Start the server and listen on the defined port
app.listen(port, () => {
  // Log a message to the console indicating that the server is running
  console.log(`Server is running on port ${port}`);
});
