import React from 'react'
import Navbar from '../components/Public/Navbar'
import Footer from '../components/Public/Footer'
import { Outlet } from 'react-router-dom'

const Weblayout = () => {
  return (
    <>
        <Navbar/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Weblayout