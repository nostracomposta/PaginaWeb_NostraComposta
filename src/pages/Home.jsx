import { Link } from 'react-router-dom';
function Home() {
  const services = [
    { title: 'Hogar Nostra Composta', btnText: 'Inscríbete ahora', img: 'https://placehold.co/286x222' },
    { title: 'Empresa Nostra Composta', btnText: 'Cotiza ahora', img: 'https://placehold.co/286x222' },
    { title: 'Taller de composta', btnText: 'Cotiza ahora', img: 'https://placehold.co/286x222' },
    { title: 'Servicio \n POOPIS', btnText: 'Inscríbete ahora', img: 'https://placehold.co/286x222' },
  ];

  return (
    <main>
      {/* HERO BANNER */}
      <div className="hero-image-container">
        <img src="https://placehold.co/1440x577" alt="Composta orgánica" />
      </div>

      {/* QUÉ ES NOSTRA COMPOSTA */}
      <section className="highlight-section">
        <div className="highlight-card">
          <h2>¿Qué es Nostra Composta?</h2>
          <p>
            Nostra Composta es una iniciativa de gestión responsable de residuos orgánicos.
            Recolectamos residuos a domicilio en hogares y negocios, y los transformamos en composta:
            tierra fértil que regresa a nutrir el ciclo de la vida.
          </p>
          <div className="highlight-cta">
            <span>¿Te interesa?</span>
           <Link to="/inscribete" className="highlight-btn">
            ¡Inscríbete!
          </Link>
        </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="problem-section">
        <h2>¿Qué problema resolvemos?</h2>
        <p>
          Gran parte de nuestros residuos son orgánicos, pero cuando se mezclan con la basura
          terminan en rellenos sanitarios en lugar de aprovecharse. En Nostra Composta buscamos
          resolver esto facilitando su separación, recolección y transformación en composta.
        </p>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="recoleccion" className="how-it-works-section">
        <div className="how-info">
          <h2>¿Cómo funciona?</h2>
          <p>En Nostra Composta hacemos que separar y aprovechar tus residuos orgánicos sea fácil. Te acompañamos en todo el proceso.</p>
          
          <div className="steps-list">
            <div className="step-item">
              <div className="step-icon">1</div>
              <span>Inscríbete</span>
            </div>
            <div className="step-item">
              <div className="step-icon">2</div>
              <span>Separa tus residuos</span>
            </div>
            <div className="step-item">
              <div className="step-icon">3</div>
              <span>Los recolectamos</span>
            </div>
            <div className="step-item">
              <div className="step-icon">4</div>
              <span>Recibe tu composta</span>
            </div>
          </div>
        </div>

        <div className="how-image-container">
          <img src="https://placehold.co/580x650" alt="Proceso de recolección" />
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="services-section">
        <h2>Nostra servicios</h2>
        <div className="services-grid">
          {services.map((item, idx) => (
            <div key={idx} className="service-card">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <div className="service-card-divider"></div>
              {item.btnText.includes('Inscríbete') ? (
               <Link to="/inscribete" className="service-card-btn">
                {item.btnText}
               </Link>
              ) : (
               <button className="service-card-btn">{item.btnText}</button>
              )}
             </div>
            ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Devuelve a la tierra lo que viene de ella.<br/>¡Se parte de Nostra Composta!</h2>
        <Link to="/inscribete" className="btn-primary" style={{ fontSize: '1.4rem', padding: '12px 32px' }}>
         Inscríbete
        </Link>
      </section>
      </main>
  );
}

export default Home;