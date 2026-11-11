import React, { useState } from 'react';

export default function Inscribete() {
  // Estado para controlar la imagen activa del carrusel
  const [currentSlide, setCurrentSlide] = useState(0);
  const formInscripcionUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdKIkFIV-EzDKSBH-65TylEJaB3I5q6lPoNw3TKUC_zvykGXw/viewform";

  const images = [
    "https://placehold.co/1311x637?text=Paso+o+Ruta+1",
    "https://placehold.co/1311x637?text=Paso+o+Ruta+2",
    "https://placehold.co/1311x637?text=Paso+o+Ruta+3"
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="inscribete-container">
      {/* SECCIÓN PRINCIPAL DE INSCRIPCIÓN */}
      <section className="inscribete-hero-section">
        <h2 className="inscribete-title">¡Sé parte de Nostra Composta!</h2>

        <a
         href={formInscripcionUrl}
         target="_blank"
         rel="noopener noreferrer"
         className="btn-amber-big"
        >
          ¡Inscríbete ahora!
        </a>

        <p className="notice-text">
          *Verifica las rutas de recolección antes de inscribirte.
        </p>
      </section>

      {/* SECCIÓN RUTAS DE RECOLECCIÓN */}
      <section className="routes-section">
        <h2 className="inscribete-title">Rutas de recolección</h2>
        
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/d/u/3/embed?mid=1iA_sQ70qt9BRf5_0aB5HIX92YW7SVpU&ehbc=2E312F&noprof=1"
            title="Rutas de recolección Nostra Composta"
            className="routes-map-iframe"
          ></iframe>
        </div>
      </section>
    </div>
  );
}