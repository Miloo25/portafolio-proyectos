import React from 'react';

function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <div className="contenido-seccion">
        <h2>Contacto</h2>
        <p className="subtitulo">¿Tienes un proyecto en mente o una propuesta laboral? ¡Escríbeme!</p>
        
        <div className="fila">
          {/* Columna de Información de Contacto */}
          <div className="col info">
            <div className="info-item">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h3>Ubicación</h3>
                <p>Medellín, Colombia</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>sasory224@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Columna del Formulario */}
          <div className="col formulario">
            {/* Si usas Formspree, pones tu API ID en el action */}
            <form action="https://formspree.io/f/tu_id_aqui" method="POST">
              <div className="grupo-input">
                <input type="text" name="nombre" placeholder="Tu Nombre" required />
                <input type="email" name="email" placeholder="Tu Correo Electrónico" required />
              </div>
              <div className="grupo-input">
                <input type="text" name="asunto" placeholder="Tema / Asunto" required />
              </div>
              <div className="grupo-input">
                <textarea name="mensaje" placeholder="Escribe tu mensaje aquí..." rows="5" required></textarea>
              </div>

              {/* Botón unificado e idéntico al de Descargar CV */}
              <div className="contenedor-btn-derecha">
                <button type="submit" className="btn-neon">
                  Enviar Mensaje <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contacto;