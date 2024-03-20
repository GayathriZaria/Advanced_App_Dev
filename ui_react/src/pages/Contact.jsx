import React, { useState } from 'react';
import axios from 'axios';
import { Phone, Mail, MapPin } from 'react-feather';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error saving contact details:', error);
    }
  };

  const handleCancel = () => {
    window.location.href = '/dashboard';
  };

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
      <div className="flex w-full">
        <div className="flex items-center justify-end w-1/2 pr-20">
          <div>
            <Phone className="h-8 w-8 mr-2 text-blue-500" /><br/><br/>
            <Mail className="h-8 w-8 mr-2 text-blue-500" /><br/><br/>
            <MapPin className="h-8 w-8 mr-2 text-blue-500" />
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Mobile Number</p>
            <p className="mb-4">9876543210</p>
            <p className="text-lg font-semibold mb-1">Mail ID</p>
            <p className="mb-4">hashitout@gmail.com</p>
            <p className="text-lg font-semibold mb-1">Location</p>
            <p>Abc street, beta city, Coimbatore - 641 041</p><br/>
          </div>
        </div>
        <div className="w-1/2 pl-10">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="border border-gray-300 rounded-md p-4">
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-1">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-1">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-semibold mb-1">Phone</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="query" className="block font-semibold mb-1">Query</label>
              <textarea id="query" name="query" value={formData.query} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full h-24 resize-none"></textarea>
            </div>
            <div className="flex justify-between">
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
              <button type="button" onClick={handleCancel} className="border border-gray-500 text-gray-500 py-2 px-4 rounded hover:bg-gray-200">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
