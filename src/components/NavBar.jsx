import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import navlogo from '../assets/images/navlogo.png';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" onClick={closeMenu}>
        <img className="nav-logo" src={navlogo} alt="Nostra Composta Logo" />
      </Link>

      {/* Botón de Hamburguesa para Móvil */}
      <button className="nav-toggle-btn" onClick={toggleMenu} aria-label="Abrir menú">
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`} />
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`} />
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`} />
      </button>

      {/* Contenedor de enlaces */}
      <div className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
        <div className="nav-menu-wrapper">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            Inicio
          </NavLink>
          
          <NavLink 
            to="/nosotros" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            Nosotros
          </NavLink>

          <NavLink 
            to="/servicios" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            Servicios
          </NavLink>

          <NavLink 
            to="/recoleccion" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            Recolección
          </NavLink>
        </div>

        <Link 
          to="/inscribete" 
          className="btn-primary"
          onClick={closeMenu}
        >
          Inscríbete
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;