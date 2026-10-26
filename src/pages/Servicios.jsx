import React from 'react';

export default function Servicios() {
  return (
    <div className="section-container">
      {/* SECCIÓN: ¿CÓMO FUNCIONA? (PASOS) */}
      <section className="how-it-works-steps">
        <h2 className="section-title">¿Cómo funciona?</h2>
        
        <div className="steps-grid">
          {/* Paso 1 */}
          <div className="step-card">
            <div className="icon-wrapper">
              <div className="step-icon-custom icon-1-1" />
              <div className="step-icon-custom icon-1-2" />
              <div className="step-icon-custom icon-1-3" />
              <div className="step-icon-custom icon-1-4" />
            </div>
            <h3 className="step-title">Inscríbete</h3>
            <p className="step-description">
              Inscríbete y recibe tu kit de bienvenida en la puerta de tu casa.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="step-card">
            <div className="icon-wrapper">
              <div className="step-icon-custom icon-2-1" />
              <div className="step-icon-custom icon-2-2" />
              <div className="step-icon-custom icon-2-3" />
            </div>
            <h3 className="step-title">Separa tus residuos</h3>
            <p className="step-description">
              Comienza a llenar tu cubeta con los residuos orgánicos de tu hogar.
            </p>
            <div className="step-badge">Lista de compostables</div>
          </div>

          {/* Paso 3 */}
          <div className="step-card">
            <div className="icon-wrapper">
              <div className="step-icon-custom icon-3-1" />
              <div className="step-icon-custom icon-3-2" />
              <div className="step-icon-custom icon-3-3" />
            </div>
            <h3 className="step-title">Recolección</h3>
            <p className="step-description">
              Solicita recolección y pasamos por tu cubeta. Te dejamos una limpia para que sigas con la separación.
            </p>
          </div>

          {/* Paso 4 */}
          <div className="step-card">
            <div className="icon-wrapper">
              <div className="step-icon-custom icon-4-1" />
              <div className="step-icon-custom icon-4-2" />
              <div className="step-icon-custom icon-4-3" />
            </div>
            <h3 className="step-title">Recibe composta</h3>
            <p className="step-description">
              Después de un ciclo de compostaje (15 recolecciones) recibe este abono para nutrir tus plantas.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN: PRECIOS Y PLANES */}
      <section className="pricing-section">
        <div className="pricing-grid">
          {/* Tarjeta Inscripción */}
          <div className="pricing-card">
            <div className="pricing-badge">
              Inscripción $300 mxn
            </div>
            <div className="pricing-details">
              <p><strong>Kit de bienvenida:</strong></p>
              <p>2 cubetas 19L<br />1 cubeta 4L</p>
              <p>Manual de separación<br />Bolsita con composta</p>
            </div>
          </div>

          {/* Tarjeta Recolección */}
          <div className="pricing-card">
            <div className="pricing-badge">
              Recolección $75 mxn
            </div>
            <div className="pricing-details">
              <p><strong>Elige como pagar:</strong></p>
              <p>Semanal<br />Mensual</p>
              <p>Trimestral<br />Semestral</p>
            </div>
          </div>
        </div>

        <p className="acopio-note">
          *También puedes llevar tus cubetas a nuestros puntos de acopio con un costo de $60 por cubeta
        </p>
      </section>

      {/* SECCIÓN: SERVICIOS */}
      <section className="services-list-section">
        <h2 className="section-title">Servicios</h2>
        <div className="services-cards-container">
          {/* Servicio 1 */}
          <div className="service-banner-card">
            <img className="service-banner-img" src="https://placehold.co/659x222" alt="Hogar Nostra Composta" />
            <div className="service-banner-info">
              <h3 className="service-banner-title">Hogar Nostra Composta</h3>
              <span className="service-banner-subtitle">Familias - Casas - Departamentos</span>
              <hr className="service-banner-divider" />
              <p className="service-banner-desc">
                ¡Lleva el compostaje a tu casa! Te damos tu kit, recolectamos tus residuos orgánicos y los transformamos en composta.
              </p>
              <button className="service-banner-btn">Inscríbete</button>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="service-banner-card">
            <img className="service-banner-img" src="https://placehold.co/659x222" alt="Empresa Nostra Composta" />
            <div className="service-banner-info">
              <h3 className="service-banner-title">Empresa Nostra Composta</h3>
              <span className="service-banner-subtitle">Restaurantes - Cafeterías - Hoteles - Comercios - Oficinas</span>
              <hr className="service-banner-divider" />
              <p className="service-banner-desc">
                Una solución para que tu empresa gestione sus residuos orgánicos de manera sencilla y responsable, desde la separación hasta su transformación en composta.
              </p>
              <button className="service-banner-btn">Cotiza ahora</button>
            </div>
          </div>

          {/* Servicio 3 */}
          <div className="service-banner-card">
            <img className="service-banner-img" src="https://placehold.co/659x222" alt="Taller de composta" />
            <div className="service-banner-info">
              <h3 className="service-banner-title">Taller de composta</h3>
              <span className="service-banner-subtitle">Personas - Escuelas - Empresas - Instituciones</span>
              <hr className="service-banner-divider" />
              <p className="service-banner-desc">
                Aprende a compostar de forma práctica y sencilla. Conoce el proceso, qué residuos puedes aprovechar y cómo convertirlos en vida para el suelo.
              </p>
              <button className="service-banner-btn">Cotiza ahora</button>
            </div>
          </div>

          {/* Servicio 4 */}
          <div className="service-banner-card">
            <img className="service-banner-img" src="https://placehold.co/659x222" alt="Servicio POOPIS" />
            <div className="service-banner-info">
              <h3 className="service-banner-title">Servicio POOPIS</h3>
              <span className="service-banner-subtitle">Mascotas - Veterinarias</span>
              <hr className="service-banner-divider" />
              <p className="service-banner-desc">
                Dale un mejor destino a los residuos de tu mascota. Una alternativa para aprovechar sus desechos de manera responsable y contribuir a un entorno más limpio.
              </p>
              <button className="service-banner-btn">Inscríbete</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-left">
            <img className="footer-logo" src="https://placehold.co/300x344" alt="Nostra Composta" />
            
            <div className="footer-contacts-list">
              <div className="footer-contact-item">
                <div className="contact-icon icon-location" />
                <div>
                  <h4 className="contact-title">Ubicación</h4>
                  <p className="contact-value">León, Guanajuato, México</p>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="contact-icon icon-whatsapp" />
                <div>
                  <h4 className="contact-title">WhatsApp</h4>
                  <p className="contact-value">477-6996-923</p>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="contact-icon icon-instagram" />
                <div>
                  <h4 className="contact-title">Instagram</h4>
                  <p className="contact-value">@nostra.composta</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-brand">
            Nostra Composta
          </div>
        </div>
      </footer>
    </div>
  );
}