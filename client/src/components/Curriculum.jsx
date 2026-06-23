import React from 'react';

function Curriculum() {
  return (
    <section id="curriculum" className="curriculum">
      <div className="contenido-seccion">
        <h2>Currículum</h2>
        <p className="subtitulo">Trayectoria técnica, proyectos independientes y ruta de formación profesional.</p>

        <div className="fila">
          {/* COLUMNA IZQUIERDA: PROYECTOS / EXPERIENCIA REAL */}
          <div className="col Izquierda">
            <h3>Experiencia en Desarrollo</h3>
            
            <div className="item">
              <h4>Desarrollador Frontend Independiente</h4>
              <span className="casa">Proyectos Personales & Prácticas</span>
              <span className="fecha">2025 - Presente</span>
              <p className="texto-bold">
                <strong>Diseño y construcción de aplicaciones web interactivas utilizando el ecosistema de React y JavaScript.</strong>
              </p>
              <p>
                • Creación de este <strong>Portafolio Profesional Premium</strong> optimizado, implementando componentes modulares y despliegue exitoso en la nube con <strong>Firebase Hosting</strong>.<br />
                • Desarrollo de interfaces dinámicas con efectos avanzados de CSS, como un <strong>Slider Continuo Infinito (Infinite Marquee)</strong> para proyectos y un sistema global de <strong>Modo Oscuro Personalizado (Dark Shadow)</strong>.<br />
                • Integración de buenas prácticas de maquetación limpia, estructuración de layouts adaptativos (Responsive Design) y optimización de assets.
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA: EDUCACIÓN / FORMACIÓN */}
          <div className="col derecha">
            <h3>Educación & Mentoría</h3>
            
            <div className="item">
              <h4>Formación Autónoma en Desarrollo de Software</h4>
              <span className="casa">Ruta Frontend & Backend</span>
              <span className="fecha">En Curso</span>
              <p className="texto-bold">
                <strong>Especialización activa en tecnologías web modernas y lógica del lado del servidor.</strong>
              </p>
              <p>
                • Enfoque principal en el dominio de la lógica con <strong>JavaScript (ES6+)</strong> y la creación de interfaces de usuario basadas en componentes con <strong>React</strong>.<br />
                • Actualmente construyendo las bases desde cero para desarrollo Backend, explorando la sintaxis y fundamentos de lenguajes como <strong>Java y PHP</strong>.<br />
                • Aprendizaje enfocado en control de versiones con <strong>Git & GitHub</strong> y flujos de trabajo eficientes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Curriculum;