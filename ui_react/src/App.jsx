import React, { Suspense, lazy } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
// import Contact from './pages/Contact'
const Contact= lazy(()=> import('./pages/Contact'))
import Weblayout from './layouts/Weblayout'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './components/Customer/Dashboard'
import UserLayout from './layouts/Userlayout'

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback='Loading...'>
        <Routes>
          <Route element={<Weblayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>
          <Route element={<UserLayout/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>
        </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App