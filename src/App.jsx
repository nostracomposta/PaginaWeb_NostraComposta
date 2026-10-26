import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Recoleccion from './pages/Recolección';
import Inscribete from './pages/Inscribete';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/recoleccion" element={<Recoleccion />} />
        <Route path="/inscribete" element={<Inscribete />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;