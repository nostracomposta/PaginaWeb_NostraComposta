import React, { useState } from 'react';
function Nosotros() {
  const [isFilosofiaHovered, setIsFilosofiaHovered] = useState(false);
  const [isValoresHovered, setIsValoresHovered] = useState(false);

  return (
    <main className="about-section">
      {/* Tarjeta Introductoria */}
      <div className="about-intro-card">
        <img className="about-intro-img" src="https://placehold.co/516x250" alt="Sobre nosotros" />
        <div className="about-intro-text">
          <p>
            Somos <strong>Nostra Composta</strong> y queremos hacer que compostar sea fácil para todos.
            Ayudamos a hogares y negocios a darle un mejor destino a sus residuos orgánicos mediante un
            servicio sencillo de recolección y compostaje.
          </p>
          <br />
          <p>
            Nosotros te damos los recipientes, recogemos tus residuos y nos encargamos de transformarlos
            en composta. Así, entre todos podemos reducir la cantidad de residuos que llegan a los rellenos
            sanitarios y devolverle a la tierra lo que viene de ella.
          </p>
        </div>
      </div>

      {/* Problemática */}
      <div className="problem-block">
        <div className="problem-banner">
          <h2>¿Cuál es la problemática que nos impulsa a actuar?</h2>
        </div>

        <div className="impact-cards-container">
          <div className="impact-card">
            <p>
              En México generamos más de 40 millones de toneladas de residuos sólidos cada año,
              y una parte de ellos son residuos orgánicos que podrían aprovecharse.
            </p>
          </div>
          <div className="impact-card">
            <p>
              Cuando estos residuos se mezclan con el resto de la basura y llegan a los rellenos sanitarios,
              se descomponen sin las condiciones adecuadas, generando gases que pueden afectar la calidad del suelo, el agua y el aire.
            </p>
          </div>
        </div>

        <p className="problem-quote">
          En Nostra Composta buscamos cambiar esta dinámica haciendo que aprovechar los residuos orgánicos
          sea sencillo y accesible, transformándolos en composta en lugar de convertirlos en un residuo más.
        </p>
      </div>

      {/* Solución */}
      <div className="solution-block">
        <h2>Nostra solución</h2>
        <div className="solution-cards-grid">
          <div className="solution-card">
            <div className="solution-card-inner">
              <p>Recolectamos tus residuos orgánicos de forma práctica y responsable, y los transformamos en composta.</p>
            </div>
          </div>
          <div className="solution-card">
            <div className="solution-card-inner">
              <p>También recolectamos tus residuos inorgánicos como plástico, fierro y aluminio sin costo extra. Estos son llevados a un centro de reciclaje.</p>
            </div>
          </div>
          <div className="solution-card">
            <div className="solution-card-inner">
              <p>En colaboración con “De Freír a Fluir” recolectamos también el aceite usado, este es transformado en biodiesel.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Banners */}
      <div className="about-banners-container">
        
        {/* BANNER 1: FILOSOFÍA */}
        <div 
          className="about-banner-wrapper"
          onMouseEnter={() => setIsFilosofiaHovered(true)}
          onMouseLeave={() => setIsFilosofiaHovered(false)}
        >
          {isFilosofiaHovered ? (
            // Banner que aparece en el Hover (basado en Figma)
            <div className="about-banner-card banner-hover-state">
              <p className="banner-hover-text">
                Trabajamos desde la convicción de que la transformación es colectiva, y que los pequeños actos cotidianos pueden regenerar la tierra y nuestra forma de habitarla. Nos mueve el deseo de hacer fácil lo necesario, de acompañar sin imponer, y de construir una comunidad informada que apueste por la vida.
              </p>
            </div>
          ) : (
            // Banner por defecto
            <div className="about-banner-card banner-default-state banner-filosofia">
              <h2>Nostra Filosofía</h2>
            </div>
          )}
        </div>

        {/* BANNER 2: VALORES */}
        <div 
          className="about-banner-wrapper"
          onMouseEnter={() => setIsValoresHovered(true)}
          onMouseLeave={() => setIsValoresHovered(false)}
        >
          {isValoresHovered ? (
            // Banner que aparece en el Hover (Agrega tu texto de valores aquí)
            <div className="about-banner-card banner-hover-state banner-valores-content">
              {/* 1. Responsabilidad Compartida */}
              <div className="valor-item">
                <h3 className="valor-title">RESPONSABILIDAD COMPARTIDA</h3>
                <p className="valor-text">
                  Promovemos prácticas accesibles y acompañadas para que cada persona pueda participar activamente en la transformación de sus hábitos, desde donde está y con lo que tiene.
                </p>
              </div>

              {/* 2. Transparencia */}
              <div className="valor-item">
                <h3 className="valor-title">TRANSPARENCIA</h3>
                <p className="valor-text">
                  Sabemos que la confianza se construye con información clara y acciones coherentes, compartimos qué pasa con los residuos, cómo los tratamos y por qué elegimos hacerlo así.
                </p>
              </div>

              {/* 3. Educar para Transformar */}
              <div className="valor-item">
                <h3 className="valor-title">EDUCAR PARA TRANSFORMAR</h3>
                <p className="valor-text">
                  Informar, sensibilizar y compartir saberes es parte central de nuestro trabajo, porque creemos que una comunidad informada tiene más herramientas para cambiar el mundo.
                </p>
              </div>

            </div>
          ) : (
            // Banner por defecto
            <div className="about-banner-card banner-default-state banner-valores">
              <h2>Nostra Valores</h2>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}

export default Nosotros;