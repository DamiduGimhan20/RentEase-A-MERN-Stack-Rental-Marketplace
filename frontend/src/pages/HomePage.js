import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { getItems } from '../services/api';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
    setFilteredItems(data);
  };

  const handleSearch = (searchTerm) => {
    const filtered = items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleCategoryFilter = (category) => {
    if (category === 'all') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item => item.category === category);
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">RentEase</h1>
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter onFilter={handleCategoryFilter} />
      <ItemList items={filteredItems} />
    </div>
  );
};

export default HomePage;