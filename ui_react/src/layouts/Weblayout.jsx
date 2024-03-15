import React from 'react'
import Navbar from '../components/Public/Navbar'
import Footer from '../components/Public/Footer'
import Outlay from '../components/Admin/Outlay'

const Weblayout = () => {
  return (
    <>
        <Navbar/>
        <div>
            <Outlay/>
        </div>
        <Footer/>
    </>
  )
}

export default Weblayout