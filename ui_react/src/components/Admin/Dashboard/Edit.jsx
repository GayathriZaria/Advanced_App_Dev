import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Edit = ({ gift, onEditGift }) => {
  const [editedGift, setEditedGift] = useState({ ...gift });

  useEffect(() => {
    setEditedGift({ ...gift });
  }, [gift]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedGift({ ...editedGift, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditGift(editedGift);
    window.location.href = "/dashboard";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Gift</h2>
      <form onSubmit={handleSubmit} className="border border-gray-300 rounded-md p-4 max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">Gift Name</label>
          <input type="text" id="name" name="name" value={editedGift.name} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block font-semibold mb-1">Gift Image URL</label>
          <input type="text" id="imageUrl" name="imageUrl" value={editedGift.imageUrl} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-semibold mb-1">Price</label>
          <input type="text" id="price" name="price" value={editedGift.price} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Edit Gift</button>
          <Link to="/dashboard" className="border border-gray-500 text-gray-500 py-2 px-4 rounded hover:bg-gray-200">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default Edit;
