import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

function Inicio() {
  return (
    <section id="inicio" className="inicio">
      <div className="contenido-banner">
        
        {/* Badge: Disponible para trabajar */}
        <div className="badge-disponible">
          <span className="punto-verde"></span>
          Disponible para nuevas oportunidades
        </div>

        <div className="contenedor-foto">
          <img src="/img/camilo.jpg" alt="Camilo - Desarrollador Web Junior" />
        </div>
        
        <h1>Camilo</h1>
        
        {/* Subtítulo dinámico con Typewriter */}
        <h2 style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <span>Soy</span>
          <span style={{ color: '#1CB698' }}>
            <Typewriter
              options={{
                strings: [
                  'Desarrollador Web Junior',
                  'Frontend Developer',
                  'Creador de Experiencias Web',
                  'Apasionado por React'
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h2>
        
        <div className="redes">
          <a href="https://github.com/Miloo25" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/camilo-rojas-guti%C3%A9rrez-2a7b52130/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        <div className="contenedor-btn-centro">
          <a href="/img/CV_Camilo_03_09_2026.pdf" download="CV_Camilo_03_09_2026.pdf" className="btn-neon">
            Descargar CV <FaDownload style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;