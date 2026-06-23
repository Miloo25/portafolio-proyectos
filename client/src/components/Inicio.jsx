import React from 'react';

function Inicio() {
  return (
    <section id="inicio" className="inicio">
      <div className="contenido-banner">
        {/* Contenedor de la foto con efecto de sombra y brillo */}
        <div className="contenedor-foto">
          <img src="/img/perfil.png" alt="Camilo - Desarrollador Web Junior" />
        </div>
        
        <h1>Camilo</h1>
        <h2>Desarrollador Web Junior</h2>
        
        {/* Iconos de Redes Sociales Estilizados */}
        <div className="redes">
          <a href="https://github.com/tu_usuario" target="_blank" rel="noreferrer" title="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noreferrer" title="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        {/* Botón de Acción Principal (Call to Action) */}
        <div className="contenedor-btn-centro">
          <a href="/cv/Camilo_CV.pdf" download className="btn-neon">
            Descargar CV <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;