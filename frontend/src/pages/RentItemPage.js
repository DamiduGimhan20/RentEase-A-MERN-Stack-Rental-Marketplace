import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const RentItemPage = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement rental logic here
    console.log('Rental submitted for item:', id, 'from', startDate, 'to', endDate);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Rent Item</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="startDate" className="block mb-2">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block mb-2">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit Rental Request
        </button>
      </form>
    </div>
  );
};

export default RentItemPage;