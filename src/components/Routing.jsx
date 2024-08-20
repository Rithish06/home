import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './Services'
import Home from './home'
import Career from './Career'
import Contact from './Contact'
import About from './About'
import Header from './Header'


const Routing = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
                <Route index element={<Home />}/>
                <Route path='about' element={<About />}/>
                <Route path='services' element={<Services />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='career' element={<Career />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
