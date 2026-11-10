import { Link } from 'react-router-dom';
import React from 'react';

// 1. Importación de los íconos SVG desde src/assets/images/
import iconoComunidadVerde from '../assets/images/comunidadverde.svg';
import iconoTrashVerde from '../assets/images/trashverde.svg';
import iconoPinVerde from '../assets/images/pinverde.svg';
import iconoFlowerVerde from '../assets/images/flowerverde.svg';
import hogarServicio from '../assets/images/hogar2.jpg';
import empresaServicio from '../assets/images/empresa2.jpg';
import tallerServicio from '../assets/images/taller2.jpg';
import poopisServicio from '../assets/images/poopis2.jpg';



export default function Servicios() {
  return (
    <div className="section-container">
      {/* SECCIÓN: ¿CÓMO FUNCIONA? (PASOS) */}
      <section className="how-it-works-steps">
        <h2 className="section-title">¿Cómo funciona?</h2>
        
        <div className="steps-grid">
          {/* Paso 1 */}
          <div className="step-card">
            <div className="how-icon-wrapper">
              <img src={iconoComunidadVerde} alt="Inscríbete" className="how-step-icon" />
            </div>
            <h3 className="step-title">Inscríbete</h3>
            <p className="step-description">
              Inscríbete y recibe tu kit de bienvenida en la puerta de tu casa.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="step-card">
            <div className="how-icon-wrapper">
              <img src={iconoTrashVerde} alt="Separa tus residuos" className="how-step-icon" />
            </div>
            <h3 className="step-title">Separa tus residuos</h3>
            <p className="step-description">
              Comienza a llenar tu cubeta con los residuos orgánicos de tu hogar.
            </p>
            <Link to="/recoleccion#lista-de-compostables" className="step-badge-link">
             Lista de compostables
            </Link>
          </div>

          {/* Paso 3 */}
          <div className="step-card">
            <div className="how-icon-wrapper">
              <img src={iconoPinVerde} alt="Recolección" className="how-step-icon" />
            </div>
            <h3 className="step-title">Recolección</h3>
            <p className="step-description">
              Solicita recolección y pasamos por tu cubeta. Te dejamos una limpia para que sigas con la separación.
            </p>
          </div>

          {/* Paso 4 */}
          <div className="step-card">
            <div className="how-icon-wrapper">
              <img src={iconoFlowerVerde} alt="Recibe composta" className="how-step-icon" />
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
              {/*columna izq del texto*/}
              <div className="pricing-column">
                <span className="pricing-text">Kit de bievenida:</span>
                <ul className="pricing-list">
                  <li>2 cubetas 19L</li>
                  <li>1 cubeta 4L</li>
                </ul>
              </div>
              {/*columna der del texto*/}
              <div className="pricing-column">
                <span className="pricing-text empty-title">&nbsp;</span>
                <ul className="pricing-list">
                  <li>Manual de separación</li>
                  <li>Bolsita con composta</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tarjeta Recolección */}
          <div className="pricing-card">
            <div className="pricing-badge">
              Recolección $75 mxn
            </div>
            <div className="pricing-details">
              {/*columna izq del texto*/}
              <div className="pricing-column">
                <span className="pricing-text">Elige como pagar:</span>
                <ul className="pricing-list">
                  <li>Semanal</li>
                  <li>Mensual</li>
                </ul>
              </div>
              {/*columna der del texto*/}
              <div className="pricing-column">
                <span className="pricing-text empty-title">&nbsp;</span>
                <ul className="pricing-list">
                  <li>Trimestral</li>
                  <li>Semestral</li>
                </ul>
              </div>
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
            <img className="service-banner-img" src={hogarServicio} alt="Hogar Nostra Composta" />
            <div className="service-banner-info">
              <h3 className="service-banner-title">Hogar Nostra Composta</h3>
              <span className="service-banner-subtitle">Familias - Casas - Departamentos</span>
              <hr className="service-banner-divider" />
              <p className="service-banner-desc">
                ¡Lleva el compostaje a tu casa! Te damos tu kit, recolectamos tus residuos orgánicos y los transformamos en composta.
              </p>
              <Link to="/inscribete" className="service-banner-btn">
                Inscríbete
              </Link>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="service-banner-card">
            <img className="service-banner-img" src={empresaServicio} alt="Empresa Nostra Composta" />
            <div className="service-banner-info">
              <h3 className="service-banner-title">Empresa Nostra Composta</h3>
              <span className="service-banner-subtitle">Restaurantes - Cafeterías - Hoteles - Comercios - Oficinas</span>
              <hr className="service-banner-divider" />
              <p className="service-banner-desc">
                Una solución para que tu empresa gestione sus residuos orgánicos de manera sencilla y responsable, desde la separación hasta su transformación en composta.
              </p>
              <button
               className="service-banner-btn"
               onClick={() => window.open("https://api.whatsapp.com/send?phone=524776996923&text=Hola,%20me%20gustaría%20cotizar%20el%20servicio%20para%20Empresas.", "_blank")}
              >
                Cotiza ahora
              </button>
            </div>
          </div>

    {/* Servicio 3 */}
    <div className="service-banner-card">
      <img className="service-banner-img" src={tallerServicio} alt="Taller de composta" />
      <div className="service-banner-info">
        <h3 className="service-banner-title">Taller de composta</h3>
        <span className="service-banner-subtitle">Personas - Escuelas - Empresas - Instituciones</span>
        <hr className="service-banner-divider" />
        <p className="service-banner-desc">
          Aprende a compostar de forma práctica y sencilla. Conoce el proceso, qué residuos puedes aprovechar y cómo convertirlos en vida para el suelo.
        </p>
        <button
         className="service-banner-btn"
         onClick={() => window.open("https://api.whatsapp.com/send?phone=524776996923&text=Hola,%20me%20gustaría%20cotizar%20un%20Taller%20de%20Composta.", "_blank")}
        >
          Cotiza ahora
        </button>
      </div>
    </div>

    {/* Servicio 4 */}
    <div className="service-banner-card">
      <img className="service-banner-img" src={poopisServicio} alt="Servicio POOPIS" />
      <div className="service-banner-info">
        <h3 className="service-banner-title">Servicio POOPIS</h3>
        <span className="service-banner-subtitle">Mascotas - Veterinarias</span>
        <hr className="service-banner-divider" />
        <p className="service-banner-desc">
          Dale un mejor destino a los residuos de tu mascota. Una alternativa para aprovechar sus desechos de manera responsable y contribuir a un entorno más limpio.
        </p>
        <Link to="/inscribete" className="service-banner-btn">
          Inscríbete
        </Link>
      </div>
    </div>
  </div>
</section>
</div>
  );
}