// Import the axios library for making HTTP requests
import axios from 'axios';

// Define the base URL for the API
const API_URL = 'http://localhost:5000/api';

// Function to get all items from the API
export const getItems = async () => {
  // Make a GET request to the /items endpoint
  const response = await axios.get(`${API_URL}/items`);
  // Return the data from the response
  return response.data;
};

// Function to get a single item by its ID from the API
export const getItem = async (id) => {
  // Make a GET request to the /items/:id endpoint
  const response = await axios.get(`${API_URL}/items/${id}`);
  // Return the data from the response
  return response.data;
};

// Function to update an existing item by its ID
export const updateItem = async (id, itemData) => {
  // Make a PUT request to the /items/:id endpoint with the updated item data
  const response = await axios.put(`${API_URL}/items/${id}`, itemData);
  // Return the data from the response
  return response.data;
};

// Function to delete an item by its ID
export const deleteItem = async (id) => {
  // Make a DELETE request to the /items/:id endpoint
  const response = await axios.delete(`${API_URL}/items/${id}`);
  // Return the data from the response
  return response.data;
};

// Function to create a new item
export const createItem = async (itemData) => {
  // Make a POST request to the /items endpoint with the new item data
  const response = await axios.post(`${API_URL}/items`, itemData);
  // Return the data from the response
  return response.data;
};
