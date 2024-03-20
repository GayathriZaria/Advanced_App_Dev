import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, CreditCard, BookCheck } from 'lucide-react'
const Leftbar = () => {
    const navigate = useNavigate()
    const UserLinks = [
        {
            title: 'Dashboard',
            path: '/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Orders',
            path: '/orders',
            icon: BookCheck
        },
        {
            title: 'Payment',
            path: '/paymentHistory',
            icon: CreditCard
        },
    ]
    const handleLogout = () => {
        navigate('/')
    }
    return (
        <>
            <div className='w-[15vw] bg-blue-50/20 shadow-md shadow-blue-500 flex flex-col'>
                <div className='h-[5vh] bg-blue-100/10 text-black flex items-center justify-center w-full font-bold border-b-2'>
                    Hash <span className='text-blue-500'> It Out </span>
                </div>
                <div className='h-[90vh] flex flex-col gap-1'>
                    {
                        UserLinks.map((link, index) => (
                            <NavLink key={index} to={link.path} className='p-5 border-b-4 border-gray-500 hover:border-blue-600 font-bold mt-2'>
                                <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                    {React.createElement(link.icon, { size: 20 })}
                                    {link.title}
                                </span>
                            </NavLink>
                        ))
                    }
                </div>
                <div className='h-[5vh] flex justify-center items-end'>
                    <button className='bg-blue-500 hover:bg-blue-600 font-semibold text-white w-full h-full p-2' onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}

export default Leftbar