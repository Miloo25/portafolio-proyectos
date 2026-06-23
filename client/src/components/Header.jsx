import React, { useState } from 'react';

function Navbar() {
  // Estado para controlar el menú desplegable en celulares
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="contenedor-header">
      {/* Tu logo original */}
      <div className="logo">
        <a href="#inicio" onClick={cerrarMenu}>Camilo</a>
      </div>

      {/* El botón de tres líneas que se activará en móvil */}
      <button 
        className={`menu-hamburguesa ${menuAbierto ? 'abierto' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Tu menú estructurado con ul/li, controlado por el estado open */}
      <nav className={`nav ${menuAbierto ? 'open' : ''}`}>
        <ul>
          <li><a href="#inicio" onClick={cerrarMenu}>Inicio</a></li>
          <li><a href="#sobremi" onClick={cerrarMenu}>Sobre Mí</a></li>
          <li><a href="#skills" onClick={cerrarMenu}>Habilidades</a></li>
          <li><a href="#curriculum" onClick={cerrarMenu}>Currículum</a></li>
          <li><a href="#contacto" onClick={cerrarMenu}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;