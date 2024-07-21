import React from 'react';

const CategoryFilter = ({ onFilter }) => {
  const categories = ['all', 'tools', 'camping', 'sports', 'electronics'];

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Filter by Category:</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onFilter(category)}
            className="bg-gray-200 px-3 py-1 rounded capitalize"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;