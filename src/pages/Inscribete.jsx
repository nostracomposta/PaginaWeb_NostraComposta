import React, { useState } from 'react';

export default function Inscribete() {
  // Estado para controlar la imagen activa del carrusel
  const [currentSlide, setCurrentSlide] = useState(0);

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

        <button className="btn-amber-big">¡Inscríbete ahora!</button>

        <p className="notice-text">
          *Verifica las rutas de recolección antes de inscribirte.
        </p>

        {/* CARRUSEL DE IMÁGENES / RUTAS */}
        <div className="carousel-container">
          <button 
            className="carousel-arrow arrow-left" 
            onClick={handlePrev} 
            aria-label="Anterior"
          >
            &#10094;
          </button>

          <div className="carousel-track">
            <img 
              src={images[currentSlide]} 
              alt={`Ruta de recolección ${currentSlide + 1}`} 
              className="carousel-image" 
            />
          </div>

          <button 
            className="carousel-arrow arrow-right" 
            onClick={handleNext} 
            aria-label="Siguiente"
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* SECCIÓN RUTAS DE RECOLECCIÓN */}
      <section className="routes-section">
        <h2 className="inscribete-title">Rutas de recolección</h2>
        
        <div className="map-wrapper">
          <img 
            className="routes-map-img" 
            src="https://placehold.co/915x522?text=Mapa+de+Rutas" 
            alt="Mapa de rutas de recolección" 
          />
        </div>
      </section>
    </div>
  );
}