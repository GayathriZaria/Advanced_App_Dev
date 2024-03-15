import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const links=
  [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
    {
        name: 'Login',
        path: '/login'
    }
  ]
  return (
    <>
        <div className='h-[5vh] w-screen flex flex-row bg-blue-400 justify-center items-center'>
            <div className='w-[80%] h-full flex felx-row justify-center items-center'>
                <div className='w-1/4'>
                    QUIZ APP
                </div>
                <div className='w-3/4 flex flex-row justify-center items-center'>
                    {links.map((link,index) => (
                        <NavLink key={index} to={link.path}>
                            {link.name}
                        </NavLink>
                    ))}
                    <div>
                        Home
                    </div>
                    <div>
                        About
                    </div>
                    <div>
                        Login
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar