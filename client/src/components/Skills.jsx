import React from 'react';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="contenido-seccion">
        <h2>Habilidades</h2>
        <p className="subtitulo">Mi stack tecnológico enfocado en el desarrollo ágil de interfaces y fundamentos lógicos.</p>
        
        <div className="contenedor-skills">
          {/* Bloque 1: Frontend (Tus Fuertes) */}
          <div className="categoria-skills">
            <h3>Frontend Development</h3>
            
            <div className="skill-item">
              <div className="info-skill">
                <span><i className="fa-brands fa-js"></i> JavaScript</span>
                <span>Bases Sólidas</span>
              </div>
              <div className="barra-progreso"><div className="progreso js"></div></div>
            </div>

            <div className="skill-item">
              <div className="info-skill">
                <span><i className="fa-brands fa-react"></i> React</span>
                <span>Componentes / SPA</span>
              </div>
              <div className="barra-progreso"><div className="progreso react"></div></div>
            </div>

            <div className="skill-item">
              <div className="info-skill">
                <span><i className="fa-brands fa-html5"></i> HTML5 & CSS3</span>
                <span>Diseño Adaptativo</span>
              </div>
              <div className="barra-progreso"><div className="progreso html-css"></div></div>
            </div>
          </div>

          {/* Bloque 2: Herramientas & Backend en Aprendizaje */}
          <div className="categoria-skills">
            <h3>Herramientas & Aprendizaje Continuo</h3>

            <div className="skill-item">
              <div className="info-skill">
                <span><i className="fa-brands fa-git-alt"></i> Git & GitHub</span>
                <span>Control de Versiones</span>
              </div>
              <div className="barra-progreso"><div className="progreso git"></div></div>
            </div>

            <div className="skill-item">
              <div className="info-skill">
                <span><i className="fa-brands fa-java"></i> Java / PHP</span>
                <span>Fundamentos Backend</span>
              </div>
              <div className="barra-progreso-aprendizaje">
                <div className="progreso backend"></div>
                <span className="etiqueta-estudio">En progreso / Estudiando desde cero</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;