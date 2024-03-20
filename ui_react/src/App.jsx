import React, { Suspense, lazy } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
const Contact= lazy(()=> import('./pages/Contact'))
import Weblayout from './layouts/Weblayout'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import UserLayout from './layouts/Userlayout'
import Dashboard from './components/Customer/Dashboard/Dashboard'
import PlaceOrders from './components/Customer/Dashboard/PlaceOrder'
import OrderDetails from './components/Customer/Dashboard/OrderDetails'
import Payment from './components/Customer/Dashboard/Payment'
import Terms from './components/Public/Terms'
import AdminLayout from './layouts/Adminlayout'
import Admin from './components/Admin/Dashboard/Admin'
import Orders from './components/Admin/Dashboard/Orders'
import PaymentHistory from './components/Admin/Dashboard/PaymentHistory'
import UserProfile from './components/Customer/Dashboard/UserProfile'


const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback='Loading...'>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/profile' element={<UserProfile/>}/>
          <Route element={<Weblayout/>}>
            <Route path='/home' element={<Home/>}/>
          </Route>
          <Route element={<UserLayout/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>
            <Route path='/placeOrders' element={<PlaceOrders/>}/>
            <Route path='/orderDetails' element={<OrderDetails/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/terms' element={<Terms/>}/>
          <Route element={<AdminLayout/>}>
            <Route path='/admin' element={<Admin/>}/>
          </Route>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/paymentHistory' element={<PaymentHistory/>}/>
        </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App