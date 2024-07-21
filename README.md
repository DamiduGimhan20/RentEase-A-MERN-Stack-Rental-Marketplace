# RentEase: A MERN Stack Rental Marketplace

RentEase is a web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack that allows users to rent and list items such as tools, camping equipment, and more.

## Features

- Browse available items for rent
- Search and filter items by category
- View detailed information about each item
- Admin dashboard for managing listings
- Add, edit, and delete item listings
- Responsive design for mobile and desktop

## Technologies Used

- Frontend:
  - React.js
  - React Router for navigation
  - Axios for API requests
  - Tailwind CSS for styling

- Backend:
  - Node.js
  - Express.js
  - MongoDB for database
  - Mongoose for object modeling

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DamiduGimhan20/RentEase-A-MERN-Stack-Rental-Marketplace.git
cd RentEase-A-MERN-Stack-Rental-Marketplace
```

2. Install dependencies for both frontend and backend:
```bash
cd frontend
npm install
```
```bash
cd server
npm install
```
3. Set up environment variables:
Create a `.env` file in the backend directory and add:
```bash
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```
4. Start the backend server:
```bash
cd server
npm start
```
5. In a new terminal, start the frontend development server:
```bash
cd frontend
npm start
```
6. Open your browser and visit `http://localhost:3000`

## Project Structure

- `/frontend`: React frontend application
- `/backend`: Express.js backend API
- `/models`: MongoDB models
- `/routes`: API routes
- `/controllers`: Request handlers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
