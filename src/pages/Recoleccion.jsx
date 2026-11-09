import React, { useState } from 'react';
import calendario from '../assets/images/calendario.svg';
import trashmini from '../assets/images/trashmini.svg';
import navlogo from '../assets/images/navlogo.png';
import logopoopis from '../assets/images/logopoopis.png';
import pet1 from '../assets/images/pet1.svg';
import hdpe2 from '../assets/images/hdpe2.svg';
import pp5 from '../assets/images/pp5.svg';
import defreirafluir from '../assets/images/defreirafluir.png';

export default function Recoleccion() {

  const [isCompostableHovered, setIsCompostableHovered] = useState(false);
  const [isNonCompostableHovered, setIsNonCompostableHovered] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSctoWXHzaqsEC7jFu3rWOzhq1aC9a_mPvMFYuRXLyshQzoMFg/viewform?usp=share_link&ouid=113931577929645402178";

  return (
    <div className="recoleccion-container">
      {/* GUÍA PARA SOLICITAR RECOLECCIÓN */}
      <section className="recoleccion-guide-section">
        <h2 className="recoleccion-main-title">Guía para solicitar tu recolección</h2>
        
        <button className="btn-olive-big"
          onClick={() => setIsOverlayOpen(true)}
        >
          Revisa los pasos
        </button>

        <div className="recommendations-box">
          <div className="recommendations-title">Recomendaciones:</div>
          
          <div className="recommendations-list">
            {/* Primer ítem (Reloj/Calendario) */}
            <div className="recommendation-item">
              <div className="recommendation-icon-wrapper">
                {/* 2. Reemplazo por el ícono de calendario importado */}
                <img 
                  src={calendario} 
                  alt="Calendario" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div className="recommendation-text">
                Pide tu recolección máximo cada 2 semanas, ya que los residuos comienzan a descomponerse y pueden generar olores que atraigan vectores como insectos o larvas a tu cubeta.
              </div>
            </div>
            
            {/* Segundo ítem (Cubeta cerrada) */}
            <div className="recommendation-item">
              <div className="recommendation-icon-wrapper">
                {/* 3. Reemplazo por el ícono de cubeta mini importado */}
                <img 
                  src={trashmini} 
                  alt="Cubeta cerrada" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div className="recommendation-text">
                Mantén tu cubeta siempre cerrada, y si es posible, cubre tus residuos con materia seca, como ojas, periódico o cartón.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLICITA TU RECOLECCIÓN & DÍA DE RECOLECCIÓN */}
      <section className="ready-bucket-section">
       <h2 className="ready-bucket-title">¿Tu cubeta ya esta lista?</h2>
       
      <section className="recoleccion-request-section">
        <a
        href={formUrl}
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-amber-recoleccion"
        >
          ¡Solicita tu recolección!
        </a>

        <div className="day-info-box">
          <h3 className="day-info-title">Día de recolección:</h3>
          <ul className="day-info-list">
            <li>Se te asignará un día de recolección, dependiendo de la zona en la que vives</li>
            <li>Envía tu acceso en caso de ser necesario</li>
            <li>Deja tu cubeta lista y cerrada afuera de la puerta de tu casa</li>
            <li>Nosotros pasamos y hacemos el cambio de cubeta</li>
          </ul>
        </div>
      </section>
      </section>

      {/* SECCIÓN TABLAS DE COSTOS */}
      <section className="costs-section">
        <h2 className="recoleccion-main-title">Costos</h2>
        
        <div className="tables-grid">
          {/* Tabla 1 */}
          <div className="cost-table-card">
            <img className="cost-header-img" src={navlogo} alt="Planes de recolección" />
            <div className="table-content">
              <div className="table-column">
                <span className="column-header">Número de servicios</span>
                <span className="table-cell">1</span>
                <span className="table-cell">2</span>
                <span className="table-cell">4</span>
                <span className="table-cell">8</span>
                <span className="table-cell">15</span>
              </div>
              <div className="table-column">
                <span className="column-header">Costo por cubeta</span>
                <span className="table-cell">$90</span>
                <span className="table-cell">$85</span>
                <span className="table-cell">$75</span>
                <span className="table-cell">$70</span>
                <span className="table-cell">$65</span>
              </div>
            </div>
          </div>

          {/* Tabla 2 */}
          <div className="cost-table-card">
            <div className="cost-header-img-wrapper">
              <img className="cost-header-img-small" src={logopoopis} alt="Costos alternativos" />
            </div>
            <div className="table-content">
              <div className="table-column">
                <span className="column-header">Número de servicios</span>
                <span className="table-cell">1</span>
                <span className="table-cell">2</span>
                <span className="table-cell">4</span>
                <span className="table-cell">8</span>
                <span className="table-cell">15</span>
              </div>
              <div className="table-column">
                <span className="column-header">Costo por cubeta</span>
                <span className="table-cell">$100</span>
                <span className="table-cell">$95</span>
                <span className="table-cell">$90</span>
                <span className="table-cell">$90</span>
                <span className="table-cell">$90</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNERS RESIDUOS */}
      <section id="lista-de-compostables" className="banners-section">
      <div className="waste-banner-wrapper"
        onMouseEnter={() => setIsCompostableHovered(true)}
        onMouseLeave={() => setIsCompostableHovered(false)}
      >
        {isCompostableHovered ? (
          //Estado hover (Listado 4 columnas)
          <div className="waste-banner banner-hover-list compostable-hover">
           <ul className="waste-list-column">
            <li>Restos de fruta y verdura</li>
            <li>Zumos de fruta</li>
            <li>Cáscaras de frutos secos</li>
            <li>Secos de té</li>
          </ul>
           <ul className="waste-list-column">
            <li>Cáscaras de huevo</li>
            <li>Hongos y champiñones</li>
            <li>Pan duro</li>
            <li>Hojas verdes y secas</li>
          </ul>
          <ul className="waste-list-column">
              <li>Poda de jardín</li>
              <li>Flores</li>
              <li>Filtros y granos de café</li>
              <li>Cartón de huevo</li>
            </ul>
          <ul className="waste-list-column">
              <li>Cartón de papel de baño</li>
              <li>Bolsas de papel</li>
              <li>Cabello</li>
              <li>Periódico</li>
            </ul>
        </div>
        ) : (
          //Estado por defecto
          <div className="waste-banner banner-compostable">
          <span>Residuos compostables</span>
        </div>
        )}
      </div>
      
        <div className="waste-banner-wrapper"
         onMouseEnter={() => setIsNonCompostableHovered(true)}
         onMouseLeave={() => setIsNonCompostableHovered(false)}
        >
          {isNonCompostableHovered ? (
            //Estado hover (Listado 4 columnas)
            <div className="waste-banner banner-hover-list non-compostable-hover">
              <ul className="waste-list-column">
                <li>Carnes</li>
                <li>Huesos</li>
                <li>Pescado y moluscos</li>
                <li>Lácteos</li>
              </ul>
              <ul className="waste-list-column">
                <li>Aceites</li>
                <li>Grasas / mantecas</li>
                <li>Aluminio</li>
                <li>Etiquetas de fruta</li>
              </ul>
              <ul className="waste-list-column">
                <li>Vidrio</li>
                <li>Papel con colores</li>
                <li>Pañales</li>
                <li>Toallas femeninas</li>
              </ul>
              <ul className="waste-list-column">
                <li>Plásticos</li>
                <li>Cigarros</li>
                <li>Excremento de animales</li>
                <li>Materiales no compostables</li>
              </ul>
            </div>
          ) : (
            //Estado por defecto
            <div className="waste-banner banner-non-compostable">
             <span>Residuos no compostables</span>
            </div>
          )}
        </div>
      
      </section>

      {/* OTROS RESIDUOS QUE TAMBIÉN NOS LLEVAMOS */}
      <section className="other-waste-section">
        <h2 className="recoleccion-main-title">Otros residuos que también nos llevamos</h2>
        
        <div className="other-waste-grid">
          {/* Plástico */}
          <div className="other-waste-card">
            <h3 className="other-waste-title">Plástico</h3>
            <div className="other-waste-images">
              <img src={pet1} alt="Plástico 1" />
              <img src={hdpe2} alt="Plástico 2" />
              <img src={pp5} alt="Plástico 3" />
            </div>
          </div>

          {/* Metal */}
          <div className="other-waste-card">
            <h3 className="other-waste-title">Metal</h3>
            <p className="other-waste-desc">
              Latas de aluminio<br />Hojalata
            </p>
          </div>

          {/* Aceite usado */}
          <div className="other-waste-card">
            <h3 className="other-waste-title">Aceite usado</h3>
            <div className="collaboration-box">
              <p className="collaboration-label">En colaboración con:</p>
              <img src={defreirafluir} alt="Empresa aliada" />
            </div>
          </div>
        </div>
      </section>

      {/* BOTÓN FINAL */}
      <div className="final-action">
        <a
         href={formUrl}
         target="_blank" 
         rel="noopener noreferrer" 
         className="btn-amber-recoleccion"
        >
          ¡Solicita tu recolección!
        </a>
      </div>

    {/* =========================================
          OVERLAY / MODAL (Guía de Pasos)
          ========================================= */}
      {isOverlayOpen && (
        <div className="overlay-backdrop">
          <div className="overlay-modal">
            <button
              className="overlay-close-btn"
              onClick={() => setIsOverlayOpen(false)}
              aria-label="Cerrar"
            >
              <div className="close-icon-wrapper">
                <div className="close-line line-1" />
                <div className="close-line line-2" />
              </div>
            </button>

            <div className="overlay-scroll-content">

              <div className="overlay-steps-grid">

                <div className="overlay-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3 className="step-title">Identifícate</h3>
                    <p className="step-description">
                      Accede al link del formulario de recolección desde tu WhatsApp o desde la página web. Recuerda poner tu número de cliente de 4 dígitos.
                    </p>
                  </div>
                </div>

                <div className="overlay-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3 className="step-title">Número de servicios</h3>
                    <p className="step-description">
                      Indica el número de servicios que deseas programar, desde 1 hasta 15 servicios (un ciclo completo de composta).
                    </p>
                  </div>
                </div>

                <div className="overlay-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3 className="step-title">Selecciona tu servicio</h3>
                    <p className="step-description">
                      Indica el tipo de servicio que deseas solicitar.
                    </p>
                    <p className="step-note">
                      *Si cuentas con ambos servicios (POOPIS y Nostra Composta) debes llenar el formulario para cada servicio, siguiendo los mismos pasos en esta lista.
                    </p>
                  </div>
                </div>

                <div className="overlay-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3 className="step-title">Selecciona la frecuencia</h3>
                    <p className="step-description">
                      A partir de 2 servicios podrás programar la frecuencia de recolección, semanal o quincenal.
                    </p>
                  </div>
                </div>

                <div className="overlay-step">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h3 className="step-title">Forma de pago</h3>
                    <p className="step-description">
                      Selecciona tu forma de pago. Si seleccionas transferencia, envía tu comprobante por WhatsApp.
                    </p>
                    <p className="step-description">
                      <strong>Concepto:</strong> número de cliente o número de pedido (este se enviará a tu correo cuando envíes el formulario).
                    </p>
                  </div>
                </div>

                <div className="overlay-step">
                  <div className="step-number">6</div>
                  <div className="step-content">
                    <h3 className="step-title">Comentarios adicionales</h3>
                    <p className="step-description">
                      Aquí puedes enviar tus códigos de acceso a tu fraccionamiento en caso de ser necesario.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overlay-info-box">
                <div className="info-box-left">
                  <p>
                    Al finalizar, <strong>no olvides enviar tu formulario</strong>. Después, <strong>recibirás un primer correo confirmando tu solicitud</strong>. Con este podrás asegurarte que se realizó correctamente tu solicitud.
                  </p>
                </div>
                <div className="info-box-right">
                  <h3 className="info-box-title">Confirmación de pedido</h3>
                  <p className="info-box-desc">
                    <strong>Recibirás un segundo correo confirmando tu pedido</strong>. Contendrá un ticket con la cantidad de servicios y las fechas programadas para tener un mejor control de tus servicios y pagos.
                  </p>
                </div>
              </div>
            </div>

            <div className="overlay-footer">
              <a
               href={formUrl}
               target="_blank" 
               rel="noopener noreferrer" 
               className="overlay-final-btn"
               onClick={() => setIsOverlayOpen(false)}
              >
                ¡Solicita tu recolección!
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}