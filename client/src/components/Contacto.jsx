import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaSpinner, 
  FaUser, 
  FaTag, 
  FaCommentDots, 
  FaCheckCircle 
} from 'react-icons/fa';

function Contacto() {
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xrenkwgn', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success('¡Mensaje enviado con éxito! Te responderé pronto.', {
          style: {
            background: '#0a101d',
            color: '#10B981',
            border: '1px solid #10B981',
            borderRadius: '12px',
            fontSize: '14px',
            padding: '12px 20px'
          },
          iconTheme: {
            primary: '#10B981',
            secondary: '#0a101d',
          },
        });
        form.reset();
      } else {
        toast.error('Hubo un problema al enviar el mensaje.');
      }
    } catch (error) {
      toast.error('Error de conexión. Inténtalo de nuevo.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="contacto-section">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="contacto-container">
        <div className="contacto-header">
          <span className="contacto-badge">Hablemos</span>
          <h2>Contacto</h2>
          <p className="contacto-subtitulo">
            ¿Tienes un proyecto en mente, una vacante o quieres colaborar? ¡Escríbeme y lo hacemos realidad!
          </p>
        </div>

        <div className="contacto-grid">
          {/* Tarjeta de Información Lateral */}
          <div className="contacto-info-card">
            <h3>Información de Contacto</h3>
            <p className="info-desc">
              Disponible para proyectos freelance, roles de desarrollo y consultas técnicas.
            </p>

            <div className="info-items-wrapper">
              <div className="info-item">
                <div className="icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="info-label">Ubicación</span>
                  <p className="info-val">Medellín, Colombia</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="info-label">Email Directo</span>
                  <a href="mailto:sasory224@gmail.com" className="info-val email-link">
                    sasory224@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <FaCheckCircle />
                </div>
                <div>
                  <span className="info-label">Estado Actual</span>
                  <p className="info-val status-val">
                    <span className="status-dot"></span> Disponible para nuevos retos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario Pro */}
          <div className="contacto-form-card">
            <form onSubmit={handleSubmit} className="contacto-form">
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="nombre"><FaUser /> Nombre Completo</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    placeholder="Ej. Carlos Mendoza" 
                    required 
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email"><FaEnvelope /> Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="ejemplo@correo.com" 
                    required 
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="asunto"><FaTag /> Asunto / Tema</label>
                <input 
                  type="text" 
                  id="asunto" 
                  name="asunto" 
                  placeholder="Propuesta laboral / Consulta de proyecto" 
                  required 
                />
              </div>

              <div className="input-group">
                <label htmlFor="mensaje"><FaCommentDots /> Mensaje</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  placeholder="Escribe los detalles de tu mensaje aquí..." 
                  rows="5" 
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-contacto-submit" disabled={enviando}>
                {enviando ? (
                  <>
                    <FaSpinner className="spinner-icon" /> Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;