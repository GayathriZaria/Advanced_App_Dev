import React from 'react';
import { Link } from 'react-router-dom';

const OrdersPage = () => {
  const orders = [
    { id: 1, giftName: 'Custom Mug', theme: 'Function', price: 250 },
    { id: 2, giftName: 'Engraved Keychain', theme: 'Birthday', price: 150 },
    { id: 3, giftName: 'Personalized Photo Frame', theme: 'Wedding', price: 500 },
  ];

  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Orders</h2>
      <div className="flex overflow-x-auto justify-center">
        <table className="table-auto border-collapse border border-gray-300 ">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Order ID</th>
              <th className="border border-gray-300 px-4 py-2">Gift Name</th>
              <th className="border border-gray-300 px-4 py-2">Theme</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td className="border border-gray-300 px-4 py-2">{order.id}</td>
                <td className="border border-gray-300 px-4 py-2">{order.giftName}</td>
                <td className="border border-gray-300 px-4 py-2">{order.theme}</td>
                <td className="border border-gray-300 px-4 py-2">${order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className="flex justify-center mt-4"> {/* Container to center the button */}
        <Link to="/admin" className="button hover:bg-blue-600">
            Back
        </Link>
      </div>
    </div>
    </>
  );
};

export default OrdersPage;
