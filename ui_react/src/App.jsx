import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './Auth/Login'
import Register from './Auth/Register'
import Home from './pages/Home'
import Contact from './pages/Contact'
const Contact=Lazy(()=> import('./pages/Contact'))
import Weblayout from './layouts/Weblayout'

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback='Loaing...'>
        <Routes>
          <Route element={<Weblayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>
        </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App