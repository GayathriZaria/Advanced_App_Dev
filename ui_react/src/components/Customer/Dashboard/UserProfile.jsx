import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const UserProfile = () => {
  // Dummy user data
  const user = {
    name: 'John Doe',
    email: 'john@gmail.com',
    address: '123 Main Street, Abc city, Chennai-28',
    mobile: '9556543210'
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <div className="mb-8">
        <User size={64} color="#555" />
        <h2 className="text-2xl font-semibold">{user.name}</h2>
      </div>
      <div className="border border-gray-300 rounded-md p-4 max-w-md">
        <div className="mb-4">
          <label className="block font-semibold mb-1">Email</label>
          <p>{user.email}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Address</label>
          <p>{user.address}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Mobile Number</label>
          <p>{user.mobile}</p>
        </div>
      </div>
      <Link to="/dashboard" className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
        Go Back
      </Link>
    </div>
  );
};

export default UserProfile;
