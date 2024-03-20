import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetails = () => {
  const order = {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    selectedGift: 'Custom Mug',
    selectedTheme: 'Birthday Theme',
    totalPrice: 250,
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="w-96 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
        <div className="mb-4">
          <p><strong>Name:</strong> {order.name}</p>
          <p><strong>Phone Number:</strong> {order.phoneNumber}</p>
          <p><strong>Selected Gift:</strong> {order.selectedGift}</p>
          <p><strong>Selected Theme:</strong> {order.selectedTheme}</p>
          <p><strong>Total Price:</strong> ${order.totalPrice}</p>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            <Link to="/payment" className="text-white">Pay</Link>
          </button>
          <Link to="/dashboard" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
            Cancel Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;


