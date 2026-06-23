import React from 'react';

function SobreMi() {
    return (
        <section id="sobremi" className="sobremi">
            <div className="contenido-seccion">
                <h2>Sobre Mí</h2>

                <div className="contenedor-sobremi">
                    {/* Bloque de Texto Orientado a Junior */}
                    <div className="texto-sobremi">
                        <p>
                            ¡Hola! Soy <strong>Camilo</strong>, un desarrollador en constante evolución con residencia en Medellín. Me apasiona el ecosistema del desarrollo web y actualmente me enfoco en crear interfaces dinámicas, limpias y funcionales.
                        </p>
                        <p>
                            Cuento con bases sólidas en el Frontend utilizando <strong>JavaScript y React</strong>, lo que me permite estructurar componentes eficientes y darles vida con estilos modernos. Sé que el camino del software es largo, por eso mantengo los pies en la tierra: reconozco que estoy en una etapa inicial, construyendo mis primeros proyectos reales y puliendo las buenas prácticas día a día.
                        </p>
                        <p>
                            No me quedo quieto; para convertirme en un desarrollador más completo, actualmente me encuentro explorando las bases del desarrollo Backend. Mi meta es aportar iniciativa, adaptabilidad y compromiso en un equipo tecnológico donde pueda seguir sumando kilómetros de código.
                        </p>
                    </div>

                    {/* Tarjetas de Enfoque Actual (Lo que te hace ver pro) */}
                    <div className="enfoques-sobremi">
                        <div className="tarjeta-enfoque">
                            <i className="fa-solid fa-code"></i>    
                            <h3>Frontend Activo</h3>
                            <p>Construcción de SPA (Single Page Applications) con React, manipulación del DOM y CSS interactivo.</p>
                        </div>

                        <div className="tarjeta-enfoque">
                            <i className="fa-solid fa-layer-group"></i>
                            <h3>Próximo Paso: Backend</h3>
                            <p>Estudiando los fundamentos de la lógica del lado del servidor para conectar interfaces con datos reales.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SobreMi;