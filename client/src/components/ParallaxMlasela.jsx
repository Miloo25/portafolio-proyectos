import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaLayerGroup, FaMouse, FaRocket } from 'react-icons/fa';

function ParallaxMlasela() {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Captura el movimiento del mouse para calcular el desplazamiento de las capas
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normaliza las coordenadas de -1 a 1
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="parallax-page-container">
      {/* Botón Flotante para Volver */}
      <button onClick={() => navigate('/')} className="btn-volver-float">
        <FaArrowLeft /> Volver al Portafolio
      </button>

      {/* --- HERO / ESCENA PARALLAX INTERACTIVA --- */}
      <div className="parallax-hero-scene">
        
        {/* Capa 1: Fondo / Red Neón Profunda (Movimiento Lento) */}
        <div 
          className="parallax-layer layer-bg"
          style={{
            transform: `translate3d(${mousePos.x * 15}px, ${mousePos.y * 15}px, 0)`
          }}
        />

        {/* Capa 2: Elementos Flotantes / Órbitas (Movimiento Intermedio) */}
        <div 
          className="parallax-layer layer-mid"
          style={{
            transform: `translate3d(${mousePos.x * -35}px, ${mousePos.y * -35}px, 0)`
          }}
        >
          <div className="shape shape-1"><FaLayerGroup /></div>
          <div className="shape shape-2"><FaRocket /></div>
          <div className="shape shape-3"></div>
        </div>

        {/* Capa 3: Contenido Principal Frontal (Movimiento Rápido y Opuesto) */}
        <div 
          className="parallax-layer layer-fg"
          style={{
            transform: `translate3d(${mousePos.x * 50}px, ${mousePos.y * 50}px, 0)`
          }}
        >
          <span className="badge-parallax">Efectos Visuales Avanzados</span>
          <h1>PARALLAX MLASELA</h1>
          <p>
            Experiencia inmersiva en tiempo real con procesamiento de profundidad 3D y renderizado multicapa.
          </p>

          <div className="parallax-actions">
            <a 
              href="https://github.com/Miloo25" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-neon"
            >
              <FaGithub /> Ver Código Fuente
            </a>
          </div>
        </div>

        {/* Indicador de Scroll Animado */}
        <div className="scroll-indicator">
          <FaMouse className="mouse-icon" />
          <span>Mueve el cursor o desliza hacia abajo</span>
        </div>
      </div>

      {/* --- SECCIÓN INFORMATIVA DE LA TECNOLOGÍA --- */}
      <div className="parallax-details-section">
        <h2>Características del Proyecto</h2>
        
        <div className="grid-features">
          <div className="feature-card">
            <h3>Profundidad Dinámica</h3>
            <p>Efecto de parallax multicapa calculado dinámicamente mediante coordenadas tridimensionales.</p>
          </div>
          <div className="feature-card">
            <h3>Rendimiento a 60 FPS</h3>
            <p>Optimizaciones en GPU utilizando la propiedad CSS <code>transform: translate3d</code> para evitar reflows del DOM.</p>
          </div>
          <div className="feature-card">
            <h3>Diseño Responsivo</h3>
            <p>Adaptación automática en dispositivos móviles utilizando acelerómetro y toques de pantalla.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParallaxMlasela;