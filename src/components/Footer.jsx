import React from 'react';
import footerlogo from '../assets/images/footerlogowhite.png';

// Importación de los íconos SVG desde src/assets/images/
import pinFooter from '../assets/images/pinfooter.svg';
import whatsFooter from '../assets/images/whatsfooter.svg';
import instaFooter from '../assets/images/instafooter.svg';

export function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Lado izquierdo: Logo + Datos de contacto */}
        <div className="footer-left">
          <img 
            className="footer-logo" 
            src={footerlogo} 
            alt="Nostra Composta" 
          />

          <div className="footer-contacts-list">
            
            {/* 1. Ubicación */}
            <div className="footer-contact-item">
              <div className="contact-icon-wrapper">
                <img 
                  src={pinFooter} 
                  alt="Ubicación" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div className="contact-info" style={{ width: 225 }}>
                <span className="contact-title">Ubicación</span>
                <span className="contact-value">León, Guanajuato, México</span>
              </div>
            </div>

            {/* 2. WhatsApp */}
            <div className="footer-contact-item">
              <div className="contact-icon-wrapper">
                <img 
                  src={whatsFooter} 
                  alt="WhatsApp" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div className="contact-info" style={{ width: 124 }}>
                <span className="contact-title">WhatsApp</span>
                <span className="contact-value">477-6996-923</span>
              </div>
            </div>

            {/* 3. Instagram */}
            <div className="footer-contact-item">
              <div className="contact-icon-wrapper">
                <img 
                  src={instaFooter} 
                  alt="Instagram" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div className="contact-info">
                <span className="contact-title">Instagram</span>
                <span className="contact-value">@nostra.composta</span>
              </div>
            </div>

          </div>
        </div>

        {/* Lado derecho: Nombre de la marca */}
        <div className="footer-brand">
          Nostra Composta
        </div>

      </div>
    </footer>
  );
}

export default Footer;