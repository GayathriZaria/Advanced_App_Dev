import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/home"
    },
    {
      title: "Dashboard",
      path: "/dashboard"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "Login",
      path: "/"
    }
  ];

  return (
    <div className="bg-white shadow-sm sticky top-0">
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg">
            Gift
            <span className="text-blue-500"></span>
          </h1>
          <ul className="flex space-x-6 text-lg font-bold">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className="text-gray-800 hover:text-blue-500 transition duration-300"
                  activeClassName="text-blue-500"
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
