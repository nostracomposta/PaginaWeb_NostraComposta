function Nosotros() {
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
      <div className="about-banner-card" style={{ backgroundImage: "url('https://placehold.co/1376x225')" }}>
        <h2>Nostra filosofía</h2>
      </div>

      <div className="about-banner-card" style={{ backgroundImage: "url('https://placehold.co/1376x225')" }}>
        <h2>Nostra valores</h2>
      </div>
    </main>
  );
}

export default Nosotros;