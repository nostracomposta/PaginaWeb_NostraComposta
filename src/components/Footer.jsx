import React from 'react';

export function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Lado izquierdo: Logo + Datos de contacto */}
        <div className="footer-left">
          <img 
            className="footer-logo" 
            src="https://placehold.co/300x344" 
            alt="Nostra Composta" 
          />

          <div className="footer-contacts-list">
            
            {/* 1. Ubicación */}
            <div className="footer-contact-item">
              <div className="contact-icon-wrapper">
                <div style={{width: 35.42, height: 12.50, left: 7.29, top: 32.29, position: 'absolute', borderRadius: 9999, outline: '1px var(--color-icons-on-button-default, #FFFFF3) solid', outlineOffset: '-0.50px'}} />
                <div style={{width: 31.25, height: 35.42, left: 9.38, top: 5.21, position: 'absolute', outline: '1px var(--color-icons-on-button-default, #FFFFF3) solid', outlineOffset: '-0.50px'}} />
                <div style={{width: 16.67, height: 16.67, left: 16.67, top: 12.50, position: 'absolute', borderRadius: 9999, border: '1px var(--color-icons-on-button-default, #FFFFF3) solid'}} />
              </div>
              <div className="contact-info" style={{width: 225}}>
                <span className="contact-title">Ubicación</span>
                <span className="contact-value">León, Guanajuato, México</span>
              </div>
            </div>

            {/* 2. WhatsApp */}
            <div className="footer-contact-item">
              <div className="contact-icon-wrapper" style={{overflow: 'hidden'}}>
                <div style={{width: 44.77, height: 44.80, left: 2.61, top: 2.60, position: 'absolute', outline: '1px var(--color-icons-white, #FFFFF3) solid', outlineOffset: '-0.50px'}} />
              </div>
              <div className="contact-info" style={{width: 124}}>
                <span className="contact-title">WhatsApp</span>
                <span className="contact-value">477-6996-923</span>
              </div>
            </div>

            {/* 3. Instagram */}
            <div className="footer-contact-item">
              <div className="contact-icon-wrapper">
                <div style={{width: 37.50, height: 37.50, left: 6.25, top: 6.25, position: 'absolute', borderRadius: 4, outline: '1px var(--color-icons-white, #FFFFF3) solid', outlineOffset: '-0.50px'}} />
                <div style={{width: 6.25, height: 6.25, left: 31.25, top: 12.50, position: 'absolute', background: 'var(--color-icons-white, #FFFFF3)', borderRadius: 9999}} />
                <div style={{width: 16.67, height: 16.67, left: 16.67, top: 16.67, position: 'absolute', borderRadius: 9999, border: '1px var(--color-icons-white, #FFFFF3) solid'}} />
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