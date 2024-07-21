import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
      <p className="text-gray-600 mb-2">LKR {item.price}/day</p>
      <Link to={`/item/${item._id}`} className="bg-blue-500 text-white px-4 py-2 rounded">
        View Details
      </Link>
    </div>
  );
};

export default ItemCard;