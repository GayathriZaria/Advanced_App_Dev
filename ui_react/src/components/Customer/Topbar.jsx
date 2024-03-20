import React from 'react';
import { NavLink } from 'react-router-dom';

const UserTopBar = () => {
  return (
    <>
      <div className='w-[90vw] h-[5vh] flex items-center justify-center shadow-md shadow-blue-500/50'>
        <div className='w-[95%] h-full flex justify-end items-center'>
          <NavLink to="/home" className="text-blue-500 hover:text-blue-700 px-4 py-2">Home</NavLink>
          <NavLink to="/placeOrders" className="text-blue-500 hover:text-blue-700 px-4 py-2">Place Order</NavLink>
          <NavLink to="/orderDetails" className="text-blue-500 hover:text-blue-700 px-4 py-2">Order Details</NavLink>
          <NavLink to="/contact" className="text-blue-500 hover:text-blue-700 px-4 py-2">Contact</NavLink>
          <NavLink to="/profile" className="text-blue-500 hover:text-blue-700 px-4 py-2">Profile</NavLink>
        </div>
      </div>
    </>
  );
};

export default UserTopBar;
