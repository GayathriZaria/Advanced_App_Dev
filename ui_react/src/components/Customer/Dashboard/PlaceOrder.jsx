import React, { useState } from 'react';

const PlaceOrders = () => {
  const [formData, setFormData] = useState({
    name: '',
    orderDate: '',
    address: '',
    phoneNumber: '',
    email: '',
    selectedGift: '',
    selectedTheme: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] === '') {
        errors[key] = 'Please fill out this field';
      }
    });
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      handlePlaceOrder();
    }
  };

  const handlePlaceOrder = () => {
    console.log('Order placed successfully');
  };

  return (
    <div className="container mx-auto px-4 py-8 h-screen overflow-y-scroll">
      <div className="flex justify-center items-center h-full">
        <div className="bg-gray-200 p-8 rounded-lg max-w-2xl w-full">
          <h2 className="text-2xl font-semibold mb-4">Place Orders</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              {formErrors.name && <span className="text-red-500">{formErrors.name}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="orderDate" className="block mb-2">Order Date</label>
              <input type="date" id="orderDate" name="orderDate" value={formData.orderDate} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              {formErrors.orderDate && <span className="text-red-500">{formErrors.orderDate}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block mb-2">Address</label>
              <textarea id="address" name="address" value={formData.address} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              {formErrors.address && <span className="text-red-500">{formErrors.address}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              {formErrors.phoneNumber && <span className="text-red-500">{formErrors.phoneNumber}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="selectedGift" className="block mb-2">Select Gift</label>
              <select
                id="selectedGift"
                name="selectedGift"
                value={formData.selectedGift}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">-- Select Gift --</option>
                <option value="photo">Photo</option>
                <option value="keychain">Keychain</option>
                <option value="miniature">Miniature</option>
                <option value="gift">Gift</option>
              </select>
              {formErrors.selectedGift && <span className="text-red-500">{formErrors.selectedGift}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="selectedTheme" className="block mb-2">Select Theme</label>
              <select
                id="selectedTheme"
                name="selectedTheme"
                value={formData.selectedTheme}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">-- Select Theme --</option>
                <option value="birthday">Birthday</option>
                <option value="wedding">Wedding</option>
                <option value="function">Function</option>
                <option value="celebration">Celebration</option>
                <option value="party">Party</option>
              </select>
              {formErrors.selectedTheme && <span className="text-red-500">{formErrors.selectedTheme}</span>}
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Place Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrders;
