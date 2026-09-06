import React, { useState, useRef, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { Link, useNavigate } from 'react-router-dom';

function Portfolio() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const opcionesTilt = {
    tiltMaxAngleX: 10,
    tiltMaxAngleY: 10,
    perspective: 1000,
    scale: 1.04,
    glareEnable: true,
    glareMaxOpacity: 0.2,
    glareColor: "#ffffff",
    glarePosition: "all",
    transitionSpeed: 1000
  };

  const misProyectos = [
    {
      id: 1,
      titulo: 'Radar Meteorológico',
      categoria: 'React',
      descripcion: 'Aplicación en tiempo real que consulta el clima de cualquier ciudad usando la API REST de OpenWeather.',
      imagen: '/img/clima.jpg',
      tecnologias: ['fa-brands fa-react', 'fa-solid fa-cloud-sun', 'fa-brands fa-css3-alt'],
      esRutaInterna: true,
      linkDemo: '/proyecto/clima',
      linkCode: '#'
    },
    {
      id: 2,
      titulo: 'Parallax Mlasela',
      categoria: 'Frontend',
      descripcion: 'Diseño web interactivo con efectos visuales avanzados.',
      imagen: '/img/p1.jpg',
      tecnologias: ['fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-js'],
      esRutaInterna: true,
      linkDemo: '/proyecto/parallax',
      linkCode: 'https://github.com/Miloo25'
    },
    {
      id: 3,
      titulo: 'E-commerce Plataforma',
      categoria: 'React',
      descripcion: 'Tienda virtual completa con pasarela de pagos integrada.',
      imagen: '/img/p2.jpg',
      tecnologias: ['fa-brands fa-react', 'fa-brands fa-node-js', 'fa-solid fa-database'],
      esRutaInterna: false,
      linkDemo: '#',
      linkCode: '#'
    },
    {
      id: 4,
      titulo: 'Backend API Rest',
      categoria: 'Node.js',
      descripcion: 'Sistema de API robusto para gestión de datos de usuarios.',
      imagen: '/img/p3.jpg',
      tecnologias: ['fa-brands fa-node-js', 'fa-solid fa-server', 'fa-solid fa-code'],
      esRutaInterna: false,
      linkDemo: '#',
      linkCode: '#'
    },
    {
      id: 5,
      titulo: 'Dashboard Admin',
      categoria: 'React',
      descripcion: 'Panel de control con métricas y gráficos en tiempo real.',
      imagen: '/img/p1.jpg',
      tecnologias: ['fa-brands fa-react', 'fa-solid fa-chart-line'],
      esRutaInterna: false,
      linkDemo: '#',
      linkCode: '#'
    }
  ];

  const categorias = ['Todos', 'React', 'Node.js', 'Frontend'];

  const proyectosFiltrados = categoriaActiva === 'Todos' 
    ? misProyectos 
    : misProyectos.filter(p => p.categoria === categoriaActiva);

  const proyectosInfinitos = [...proyectosFiltrados, ...proyectosFiltrados];

  // MOVIMIENTO CONTINUO INFINITO
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animacionId;

    const moverContinuo = () => {
      if (!isHovered) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animacionId = requestAnimationFrame(moverContinuo);
    };

    animacionId = requestAnimationFrame(moverContinuo);

    return () => cancelAnimationFrame(animacionId);
  }, [isHovered, categoriaActiva]);

  // NAVEGACIÓN POR FLECHAS
  const moverSlider = (direccion) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const distancia = 330;
    const mitadAncho = slider.scrollWidth / 2;

    if (direccion === 'derecha') {
      if (slider.scrollLeft >= mitadAncho) {
        slider.scrollLeft = 0;
      }
      slider.scrollBy({ left: distancia, behavior: 'smooth' });
    } else {
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = mitadAncho;
      }
      slider.scrollBy({ left: -distancia, behavior: 'smooth' });
    }
  };

  // Manejador para abrir el proyecto al hacer clic en cualquier parte de la tarjeta
  const abrirProyecto = (proyecto, e) => {
    // Si el clic viene directamente del botón de código, dejamos que su evento continúe
    if (e.target.closest('.btn-card-code')) return;

    if (proyecto.esRutaInterna) {
      navigate(proyecto.linkDemo);
    } else if (proyecto.linkDemo !== '#') {
      window.open(proyecto.linkDemo, '_blank', 'noreferrer');
    }
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="contenido-seccion">
        <h2>Proyectos</h2>

        {/* --- BOTONES DE FILTRO --- */}
        <div className="contenedor-filtros">
          {categorias.map((cat, index) => (
            <button
              key={index}
              className={`btn-neon ${categoriaActiva === cat ? 'activo' : ''}`}
              onClick={() => setCategoriaActiva(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- CONTENEDOR INTERACTIVO --- */}
        <div 
          className="slider-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Flecha Izquierda */}
          <button 
            className="btn-flecha btn-flecha-izq" 
            onClick={() => moverSlider('izquierda')}
            aria-label="Proyecto anterior"
          >
            &#10094;
          </button>

          {/* Marco interactivo */}
          <div className="rectangulo-slider-interactivo" ref={sliderRef}>
            <div className="slider-track-interactivo">
              {proyectosInfinitos.map((proyecto, idx) => (
                <Tilt key={`${proyecto.id}-${idx}`} {...opcionesTilt}>
                  <div 
                    className="proyecto-card-hd"
                    onClick={(e) => abrirProyecto(proyecto, e)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="card-img-container">
                      <img src={proyecto.imagen} alt={proyecto.titulo} />
                    </div>
                    
                    <div className="card-detalles">
                      <h3>{proyecto.titulo}</h3>
                      <p>{proyecto.descripcion}</p>
                      
                      <div className="card-tech-icons">
                        {proyecto.tecnologias.map((techClass, techIdx) => (
                          <i key={techIdx} className={techClass}></i>
                        ))}
                      </div>
                    </div>
                    
                    <div className="card-actions">
                      {proyecto.esRutaInterna ? (
                        <Link to={proyecto.linkDemo} className="btn-card-demo">
                          Abrir
                        </Link>
                      ) : (
                        <a href={proyecto.linkDemo} target="_blank" rel="noreferrer" className="btn-card-demo">
                          Abrir
                        </a>
                      )}

                      <a href={proyecto.linkCode} target="_blank" rel="noreferrer" className="btn-card-code">
                        <i className="fa-solid fa-code"></i> Code
                      </a>
                    </div>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>

          {/* Flecha Derecha */}
          <button 
            className="btn-flecha btn-flecha-der" 
            onClick={() => moverSlider('derecha')}
            aria-label="Siguiente proyecto"
          >
            &#10095;
          </button>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;