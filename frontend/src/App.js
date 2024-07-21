import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import RentItemPage from './pages/RentItemPage';
import AdminDashboard from './pages/AdminDashboard';
import AddItemPage from './pages/AddItemPage';
import EditItemPage from './pages/EditItemPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/item/:id" element={<ItemDetailsPage />} />
            <Route path="/rent/:id" element={<RentItemPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/add-item" element={<AddItemPage />} />
            <Route path="/admin/edit-item/:id" element={<EditItemPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;