import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <img className="nav-logo" src="https://placehold.co/250x98" alt="Nostra Composta Logo" />
      <div className="nav-links">
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
        
        <NavLink 
          to="/inscribete" 
          className="btn-primary"
        >
          Inscríbete
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;