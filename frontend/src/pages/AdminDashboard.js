import React, { useState, useEffect } from 'react';
import { getItems, deleteItem } from '../services/api';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <Link to="/admin/add-item" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Add New Item
      </Link>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item._id}>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.category}</td>
              <td className="border p-2">LKR {item.price}/day</td>
              <td className="border p-2">
<Link to={`/admin/edit-item/${item._id}`} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
  Edit
</Link>
                <button onClick={() => handleDelete(item._id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;