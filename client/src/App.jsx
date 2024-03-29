import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import Profile from './pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import Alert from './pages/Alert'
import Solutions from './pages/Solutions'
import Report from './pages/Report'

export default function App() { 
  return (
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
     

      <Route element={<PrivateRoute />} >
      <Route path='/alerts' element={<Alert />} />
      <Route path='/solutions' element={<Solutions />} />
      <Route path='/report' element={<Report/>} />
      <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>    
  );
}
