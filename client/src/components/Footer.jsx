import React from 'react';
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaBriefcase, 
  FaFolderOpen, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaReact, 
  FaChevronUp 
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-neon">
      {/* Botón flotante neón para regresar al inicio */}
      <a href="#inicio" className="arriba" aria-label="Volver arriba" title="Volver al inicio">
        <span className="letra-c">C</span>
        <FaChevronUp className="flecha-arriba" />
      </a>

      <div className="contenido-footer">
        {/* Marca personal / Logotipo */}
        <div className="brand-footer">
          <h3>Camilo<span>.dev</span></h3>
          <p>Desarrollador Web | Creando experiencias digitales con pasión</p>
        </div>

        {/* Enlaces de navegación con iconos */}
        <nav className="footer-nav">
          <a href="#inicio"><FaHome /> <span>Inicio</span></a>
          <a href="#sobremi"><FaUser /> <span>Sobre Mí</span></a>
          <a href="#skills"><FaCode /> <span>Habilidades</span></a>
          <a href="#curriculum"><FaBriefcase /> <span>Experiencia</span></a>
          <a href="#portfolio"><FaFolderOpen /> <span>Proyectos</span></a>
          <a href="#contacto"><FaEnvelope /> <span>Contacto</span></a>
        </nav>

        {/* Redes Sociales Profesionales */}
        <div className="redes-footer">
          <a 
            href="https://github.com/Miloo25" 
            target="_blank" 
            rel="noreferrer" 
            className="icono-github" 
            title="GitHub"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="icono-linkedin" 
            title="LinkedIn"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:sasory224@gmail.com" 
            className="icono-correo" 
            title="Correo"
          >
            <FaEnvelope /> <span>Correo</span>
          </a>
        </div>

        {/* Badge de stack moderno */}
        <div className="badge-tech-footer">
          <FaReact className="react-spin" />
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