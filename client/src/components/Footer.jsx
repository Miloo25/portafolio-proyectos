import React from 'react';

function Footer() {
  return (
    <footer>
      {/* Botón flotante con la inicial "C" de Camilo para regresar al inicio */}
      <a href="#inicio" className="arriba">
        C
      </a>

      {/* Enlaces de navegación fluidos */}
      <nav className="footer-nav">
        <a href="#inicio">Inicio</a>
        <a href="#curriculum">Experiencia</a>
        <a href="#portfolio">Proyectos</a>
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

      <p className="copyright">&copy; {new Date().getFullYear()} Camilo. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;