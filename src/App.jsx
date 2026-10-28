import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import NavBar from './components/Navbar'
import Footer from './components/Footer'

// Páginas
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Recoleccion from './pages/Recoleccion'
import Inscribete from './pages/Inscribete'

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/recoleccion" element={<Recoleccion />} />
        <Route path="/inscribete" element={<Inscribete />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App