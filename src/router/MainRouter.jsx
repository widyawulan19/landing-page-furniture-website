import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Benefit from '../pages/Benefit'
import About from '../pages/About'
import Services from '../pages/Services'
import Katalog from '../pages/Katalog'

function MainRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/benefit' element={<Benefit/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/katalog' element={<Katalog/>}/>
        </Routes>
    </Router>
  )
}

export default MainRouter