import React from 'react';
import ItemCard from './ItemCard';

const ItemList = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map(item => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;