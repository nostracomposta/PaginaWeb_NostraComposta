import React from 'react';

export default function Recoleccion() {
  return (
    <div className="recoleccion-container">
      {/* GUÍA PARA SOLICITAR RECOLECCIÓN */}
      <section className="recoleccion-guide-section">
        <h2 className="recoleccion-main-title">Guía para solicitar tu recolección</h2>
        
        <button className="btn-olive-big">Revisa los pasos</button>

        <div className="recommendations-box">
          <h3 className="recommendations-title">Recomendaciones:</h3>
          <p className="recommendations-text">
            Pide tu recolección máximo cada 2 semanas, ya que los residuos comienzan a descomponerse y pueden generar olores que atraigan vectores como insectos o larvas a tu cubeta.
            <br /><br />
            Mantén tu cubeta siempre cerrada, y si es posible, cubre tus residuos con materia seca, como hojas, periódico o cartón.
          </p>
        </div>
      </section>

      {/* SOLICITA TU RECOLECCIÓN & DÍA DE RECOLECCIÓN */}
      <section className="recoleccion-request-section">
        <button className="btn-amber-big">¡Solicita tu recolección!</button>

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

      {/* SECCIÓN TABLAS DE COSTOS */}
      <section className="costs-section">
        <h2 className="recoleccion-main-title">Costos</h2>
        
        <div className="tables-grid">
          {/* Tabla 1 */}
          <div className="cost-table-card">
            <img className="cost-header-img" src="https://placehold.co/381x149" alt="Planes de recolección" />
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
              <img className="cost-header-img-small" src="https://placehold.co/303x74" alt="Costos alternativos" />
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
      <section className="banners-section">
        <div className="waste-banner banner-compostable">
          <span>Residuos compostables</span>
        </div>
        <div className="waste-banner banner-non-compostable">
          <span>Residuos no compostables</span>
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
              <img src="https://placehold.co/75x100" alt="Plástico 1" />
              <img src="https://placehold.co/81x100" alt="Plástico 2" />
              <img src="https://placehold.co/78x100" alt="Plástico 3" />
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
              <img src="https://placehold.co/106x100" alt="Empresa aliada" />
            </div>
          </div>
        </div>
      </section>

      {/* BOTÓN FINAL */}
      <div className="final-action">
        <button className="btn-amber-big">¡Solicita tu recolección!</button>
      </div>
    </div>
  );
}