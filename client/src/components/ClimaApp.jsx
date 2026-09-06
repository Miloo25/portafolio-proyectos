import React, { useState } from 'react';
import './ClimaApp.css';

function ClimaApp() {
  const [ciudad, setCiudad] = useState('');
  const [clima, setClima] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  // Tu API Key activa de OpenWeather
  const API_KEY = '741ac1bea458eedd622bcd319607e5a7'; 

  const obtenerClima = async (e) => {
    e.preventDefault();
    if (!ciudad.trim()) return;

    setCargando(true);
    setError(null);
    setClima(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${API_KEY}`;
      const respuesta = await fetch(url);

      if (!respuesta.ok) {
        if (respuesta.status === 401) {
          throw new Error('La API Key aún se está activando en OpenWeather. Espera unos minutos e intenta de nuevo.');
        }
        throw new Error('Ciudad no encontrada. Revisa el nombre e intenta de nuevo.');
      }

      const datos = await respuesta.json();
      setClima(datos);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="clima-container" id="clima-app">
      <div className="clima-card">
        <h2>🌦️ Radar Meteorológico en Tiempo Real</h2>

        {/* Formulario de Búsqueda */}
        <form onSubmit={obtenerClima} className="clima-form">
          <input
            type="text"
            placeholder="Escribe una ciudad (ej. Medellín, Madrid)..."
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
          <button type="submit" disabled={cargando}>
            {cargando ? 'Buscando...' : 'Buscar'}
          </button>
        </form>

        {/* Estado de Error */}
        {error && <p className="clima-error">⚠️ {error}</p>}

        {/* Tarjeta de Clima Desplegada */}
        {clima && (
          <div className="clima-info">
            <h3>{clima.name}, {clima.sys.country}</h3>
            
            <div className="temperatura-box">
              <img
                src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`}
                alt={clima.weather[0].description}
              />
              <span className="temperatura">{Math.round(clima.main.temp)}°C</span>
            </div>

            <p className="descripcion">{clima.weather[0].description}</p>

            <div className="detalles-grid">
              <div>
                <span>Humedad</span>
                <strong>{clima.main.humidity}%</strong>
              </div>
              <div>
                <span>Viento</span>
                <strong>{clima.wind.speed} m/s</strong>
              </div>
              <div>
                <span>Sensación</span>
                <strong>{Math.round(clima.main.feels_like)}°C</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClimaApp;