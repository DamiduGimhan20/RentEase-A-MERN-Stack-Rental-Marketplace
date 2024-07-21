import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">RentEase</Link>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/admin" className="mr-4">Admin</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;