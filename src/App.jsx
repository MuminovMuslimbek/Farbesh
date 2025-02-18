import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Drivers from './pages/Drivers'

function App() {
  return (
    <Routes>
      <Route index element={<Start />} />
      <Route path='/home' element={<Home />} />
      <Route path='/drivers' element={<Drivers />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App