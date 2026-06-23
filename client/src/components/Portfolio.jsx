function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="contenido-seccion">
        <h2>Portafolio</h2>
        
        {/* Este es el rectángulo contenedor con el fondo azul claro */}
        <div className="rectangulo-slider">
          <div className="slider-track">
            
            {/* GRUPO 1: Tus proyectos originales */}
            <div className="proyecto">
              <img src="img/p1.jpg" alt="Proyecto 1" />
              <div className="overlay"><h3>Diseño Web</h3></div>
            </div>
            <div className="proyecto">
              <img src="img/p2.jpg" alt="Proyecto 2" />
              <div className="overlay"><h3>Backend App</h3></div>
            </div>
            <div className="proyecto">
              <img src="img/p3.jpg" alt="Proyecto 3" />
              <div className="overlay"><h3>E-Commerce</h3></div>
            </div>

            {/* GRUPO 2: Duplicados exactos para el efecto infinito sin saltos */}
            <div className="proyecto" aria-hidden="true">
              <img src="img/p1.jpg" alt="Proyecto 1" />
              <div className="overlay"><h3>Diseño Web</h3></div>
            </div>
            <div className="proyecto" aria-hidden="true">
              <img src="img/p2.jpg" alt="Proyecto 2" />
              <div className="overlay"><h3>Backend App</h3></div>
            </div>
            <div className="proyecto" aria-hidden="true">
              <img src="img/p3.jpg" alt="Proyecto 3" />
              <div className="overlay"><h3>E-Commerce</h3></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;