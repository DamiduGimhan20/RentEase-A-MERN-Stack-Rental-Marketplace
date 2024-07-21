import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../services/api';

const ItemDetailsPage = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    const data = await getItem(id);
    setItem(data);
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
      <img src={item.image} alt={item.name} className="w-full max-w-md mb-4 rounded" />
      <p className="text-xl mb-2">Price: ${item.price}/day</p>
      <p className="text-gray-700 mb-4">{item.description}</p>
      <p className="text-gray-600">Category: {item.category}</p>
      {/* Add rental form or button here */}
    </div>
  );
};

export default ItemDetailsPage;