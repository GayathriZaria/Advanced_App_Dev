import React from 'react';

const Admin = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome Admin!</h2>
      <p className="text-lg mb-8">You have access to make changes.</p>
      <p className="text-lg mb-6">You are now logged in as an administrator. Manage your gifts, orders, and payment history efficiently.</p>
            <blockquote className="text-lg italic text-gray-600 mb-6">
                "Empower your admin experience with our intuitive dashboard. Stay organized and in control of your e-commerce operations."
            </blockquote>
    </div>
  );
};

export default Admin;
