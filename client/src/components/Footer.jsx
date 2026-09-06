import React from 'react';

function Footer() {
  return (
    <footer className="footer-neon">
      {/* Botón flotante neón para regresar al inicio */}
      <a href="#inicio" className="arriba" aria-label="Volver arriba" title="Volver al inicio">
        <span className="letra-c">C</span>
        <i className="fa-solid fa-chevron-up flecha-arriba"></i>
      </a>

      <div className="contenido-footer">
        {/* Marca personal / Logotipo */}
        <div className="brand-footer">
          <h3>Camilo<span>.dev</span></h3>
          <p>Desarrollador Web Junior | Creando experiencias digitales con pasión</p>
        </div>

        {/* Enlaces de navegación fluidos */}
        <nav className="footer-nav">
          <a href="#inicio">Inicio</a>
          <a href="#sobremi">Sobre Mí</a>
          <a href="#skills">Habilidades</a>
          <a href="#curriculum">Experiencia</a>
          <a href="#portfolio">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* Redes Sociales con enfoque profesional */}
        <div className="redes-footer">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="icono-github" 
            title="GitHub"
          >
            <i className="fa-brands fa-github"></i> <span>GitHub</span>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="icono-linkedin" 
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i> <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:sasory224@gmail.com" 
            className="icono-correo" 
            title="Correo"
          >
            <i className="fa-solid fa-envelope"></i> <span>Correo</span>
          </a>
        </div>

        {/* Muestra de stack moderno */}
        <div className="badge-tech-footer">
          <i className="fa-brands fa-react react-spin"></i>
          <span>Desarrollado con React & CSS3</span>
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Camilo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;