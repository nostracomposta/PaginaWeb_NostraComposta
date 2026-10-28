import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="nav-logo" src="https://placehold.co/250x98" alt="Nostra Composta Logo" />
      </Link>

      <div className="nav-links">
        <div className="nav-menu-wrapper">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Inicio
          </NavLink>
          
          <NavLink 
            to="/nosotros" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Nosotros
          </NavLink>

          <NavLink 
            to="/servicios" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Servicios
          </NavLink>

          <NavLink 
            to="/recoleccion" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Recolección
          </NavLink>
        </div>

        <Link 
          to="/inscribete" 
          className="btn-primary"
        >
          Inscríbete
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;