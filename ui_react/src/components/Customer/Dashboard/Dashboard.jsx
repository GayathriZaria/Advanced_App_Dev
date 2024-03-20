import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Custom Mug', price: 250, image: 'https://cdn.wishingcart.in/wp-content/uploads/2022/03/Magic-Mug.-Anniversary.jpg' },
    { id: 2, name: 'Personalized Photo Frame', price: 500, image: 'https://i5.walmartimages.com/seo/Weddingstar-9058-Our-Story-Multiple-Opening-Photo-Frame-Table-Top-2-Panels-White-Finish_b0ab4c65-614e-4735-964c-c05da85d4254.035ce8eaa5ffdfeee216423430fe8b29.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF' },
    { id: 3, name: 'Engraved Keychain', price: 150, image: 'https://www.zestpics.com/cdn/shop/files/01_b89e824f-94e8-4c97-941c-3567c6be026b.jpg?v=1685971488&width=1080' },
    { id: 4, name: 'Caricature', price: 400, image: 'https://personalizedgift.in/wp-content/uploads/2021/09/happy-couple-2-caricature-2.jpg' }, // Corrected ID
  ]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [gift, setGift] = useState({
    name: '',
    image: '',
    price: ''
  });

  const authenticate = (email, password) => {
    if (email === 'admin@gmail.com' && password === 'Admin123$') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  const handleLogout = () => {
    console.log('Logout');
  };

  const handleOrder = (productId) => {
    console.log(`Ordered product with ID ${productId}`);
  };

  const handleEdit = (productId) => {
    console.log(`Edit product with ID ${productId}`);
    if (!isAdmin) {
      alert('You do not have permission to edit products.');
      return;
    }
  
    const editedProduct = products.find(product => product.id === productId);
    setGift({ ...editedProduct });
    setShowEditModal(true);
  };
  const handleEditProduct = (e) => {
    e.preventDefault();
    const updatedProducts = products.map(product => {
      if (product.id === gift.id) {
        return { ...product, name: gift.name, image: gift.image, price: gift.price };
      }
      return product;
    });
    
    setProducts(updatedProducts);
    setShowEditModal(false);
    setGift({ name: '', image: '', price: '' });
  };
  const handleDelete = (productId) => {
    console.log(`Delete product with ID ${productId}`);
    if (!isAdmin) {
      alert('You do not have permission to delete products.');
      return;
    }

    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleAdd = () => {
    console.log('Add new product');
    if (!isAdmin) {
      alert('You do not have permission to add products.');
      return;
    }
    setShowAddModal(true);
  };

  const handleAddProduct = () => {
    if (!gift.name || !gift.image || !gift.price) { // Corrected key name
      alert('Please fill out all fields.');
      return;
    }
    setProducts([...products, gift]);
    setShowAddModal(false); 
    setGift({
      name: '',
      image: '',
      price: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGift({ ...gift, [name]: value });
  };

  return (
    <div className="container mx-auto px-4 py-8 h-screen overflow-auto">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.name} className="mb-2" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            {isAdmin && (
              <>
                <button onClick={() => handleEdit(product.id)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2">Edit</button>
                <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Delete</button>
              </>
            )}
            {!isAdmin && (
              <Link to="/order" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Order
              </Link>
            )}
          </div>
        ))}
      </div>
      {isAdmin && (
        <button onClick={handleAdd} className="block w-max bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600">Add Product</button>
      )}
      {isAdmin ? (
        <button onClick={handleLogout} className="bg-gray-500 text-white py-2 px-4 rounded mt-4 hover:bg-gray-600">Logout</button>
      ) : (
        <button onClick={() => authenticate(prompt('Enter email:'), prompt('Enter password:'))} className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">Login as Admin</button>
        )}
        {showAddModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-md shadow-md">
              <button className="absolute top-2 right-2 text-gray-600" onClick={() => setShowAddModal(false)}>Close</button>
              <h2 className="text-xl font-semibold mb-4">Add Gift</h2>
              <form onSubmit={handleAddProduct}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-semibold mb-1">Gift Name</label>
                  <input type="text" id="name" name="name" value={gift.name} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block font-semibold mb-1">Gift Image URL</label> {/* Changed htmlFor to "image" */}
                  <input type="text" id="image" name="image" value={gift.image} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" /> {/* Changed name to "image" */}
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block font-semibold mb-1">Price</label>
                  <input type="text" id="price" name="price" value={gift.price} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="flex justify-between">
                  <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Gift</button>
                  <button type="button" onClick={() => setShowAddModal(false)} className="border border-gray-500 text-gray-500 py-2 px-4 rounded hover:bg-gray-200">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
        {showEditModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-md shadow-md">
              <button className="absolute top-2 right-2 text-gray-600" onClick={() => setShowEditModal(false)}>Close</button>
              <h2 className="text-xl font-semibold mb-4">Edit Gift</h2>
              <form onSubmit={handleEditProduct}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-semibold mb-1">Gift Name</label>
                  <input type="text" id="name" name="name" value={gift.name} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block font-semibold mb-1">Gift Image URL</label> {/* Changed htmlFor to "image" */}
                  <input type="text" id="image" name="image" value={gift.image} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" /> {/* Changed name to "image" */}
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block font-semibold mb-1">Price</label>
                  <input type="text" id="price" name="price" value={gift.price} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="flex justify-between">
                  <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Edit Gift</button>
                  <button type="button" onClick={() => setShowEditModal(false)} className="border border-gray-500 text-gray-500 py-2 px-4 rounded hover:bg-gray-200">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
  );
};

export default Dashboard;

