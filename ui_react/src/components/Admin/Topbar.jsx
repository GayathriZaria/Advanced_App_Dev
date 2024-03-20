import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className='w-[90vw] h-[5vh] flex items-center justify-center shadow-md shadow-blue-500/50'>
      <div className='w-[95%] h-full flex justify-end items-center'>
        <Link to="/dashboard" className="text-blue-500 hover:text-blue-700 px-4 py-2 mr-2 rounded-md bg-blue-100">Gifts</Link>
        <Link to="/orders" className="text-blue-500 hover:text-blue-700 px-4 py-2 mr-2 rounded-md bg-blue-100">View Orders</Link>
        <Link to="/paymentHistory" className="text-blue-500 hover:text-blue-700 px-4 py-2 rounded-md bg-blue-100">Payment History</Link>
      </div>
    </div>
  );
};

export default TopBar;
