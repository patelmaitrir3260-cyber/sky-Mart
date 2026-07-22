
import React from 'react'
import { Routes,Route } from 'react-router'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Shope from '../pages/Shope'
import Details from '../pages/Details'
import About from '../pages/About'


const Aboutroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Shope/>}/>
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default Aboutroutes
