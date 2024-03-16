import React, { useState } from 'react';

const Dashboard = () => {
  const [products] = useState([
    { id: 1, name: 'Custom Mug', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Personalized Photo Frame', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Engraved Keychain', price: 15, image: 'https://via.placeholder.com/150' },
    // Add more products as needed
  ]);

  const handleLogout = () => {
    // Logic to handle logout
    console.log('Logout');
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.name} className="mb-2" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;


// import React from 'react'
// import UserTitlebar from '../../components/Customer/Titlebar'
// import { BookCheck, BookCopy, CircleCheckBig, Medal } from 'lucide-react'

// const Dashboard = () => {
//     return (
//         <>
//             <UserTitlebar Title='Dashboard' />
//             <div className='h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw] gap-4'>
//                 <div className='flex flex-row h-40 w-1/4 shadow-md shadow-orange-500/40 cursor-pointer hover:shadow-orange-500 '>
//                     <div className='h-full w-4/6 flex flex-col bg-orange-200/10'>
//                         <div className='h-3/4 w-full flex justify-center items-center'>
//                             <h2 className='text-5xl font-bold'>#1</h2>
//                         </div>
//                         <div className='h-2/6 w-full flex items-center justify-center'>
//                             <p className='font-semibold'>Rank</p>
//                         </div>
//                     </div>
//                     <div className='h-full w-2/4 flex items-center justify-center border-2 border-orange-500/5'>
//                         <Medal className='text-orange-500' size={50} />
//                     </div>
//                 </div>
//                 <div className='flex flex-row h-40 w-1/4 shadow-md shadow-orange-500/40 cursor-pointer hover:shadow-orange-500'>
//                     <div className='h-full w-4/6 flex flex-col bg-orange-200/10'>
//                         <div className='h-3/4 w-full flex justify-center items-center'>
//                             <h2 className='text-5xl font-bold'>8</h2>
//                         </div>
//                         <div className='h-2/6 w-full flex items-center justify-center'>
//                             <p className='font-semibold'>MCQ's Taken</p>
//                         </div>
//                     </div>
//                     <div className='h-full w-2/4 flex items-center justify-center border-2 border-orange-500/5'>
//                         <BookCheck className='text-orange-500' size={50} />

//                     </div>
//                 </div>
//                 <div className='flex flex-row h-40 w-1/4 shadow-md shadow-orange-500/40 cursor-pointer hover:shadow-orange-500'>
//                     <div className='h-full w-4/6 flex flex-col bg-orange-200/10'>
//                         <div className='h-3/4 w-full flex justify-center items-center'>
//                             <h2 className='text-5xl font-bold'>10</h2>
//                         </div>
//                         <div className='h-2/6 w-full flex items-center justify-center'>
//                             <p className='font-semibold'>Total MCQ's</p>
//                         </div>
//                     </div>
//                     <div className='h-full w-2/4 flex items-center justify-center border-2 border-orange-500/5'>
//                         <BookCopy className='text-orange-500' size={50} />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Dashboard