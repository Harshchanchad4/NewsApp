import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"
import SpecificSearch from './pages/SpecificSearch'
import About from './pages/About'
import Contact from './pages/ContactPage'



function App() {

  return (

    <div className='h-screen w-[100%] '>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specific-search/:customname" element={<SpecificSearch />} />
        <Route path="/specific-search/:customname" element={<SpecificSearch />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>

  )
}

export default App
