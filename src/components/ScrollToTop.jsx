import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Al cambiar la ruta (pathname), mueve el scroll al inicio absoluto de la página
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}