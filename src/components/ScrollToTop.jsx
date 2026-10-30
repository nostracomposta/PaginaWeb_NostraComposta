import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const topPosition = element.getBoundingClientRect().top + window.pageYOffset - 160;
          window.scrollTo({ 
            top: topPosition, 
            behavior: 'smooth' 
          });
        }
      }, 100);
    } else {
    // Al cambiar la ruta (pathname), mueve el scroll al inicio absoluto de la página
    window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}