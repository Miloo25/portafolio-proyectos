import React, { useState } from 'react';

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="contenedor-header">
      <div className="logo">
        <a href="#inicio" onClick={cerrarMenu}>Camilo</a>
      </div>

      <button 
        className={`menu-hamburguesa ${menuAbierto ? 'abierto' : ''}`} 
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${menuAbierto ? 'open' : ''}`}>
        <ul>
          <li><a href="#inicio" onClick={cerrarMenu}>Inicio</a></li>
          <li><a href="#sobremi" onClick={cerrarMenu}>Sobre Mí</a></li>
          <li><a href="#skills" onClick={cerrarMenu}>Habilidades</a></li>
          <li><a href="#curriculum" onClick={cerrarMenu}>Currículum</a></li>
          <li><a href="#portfolio" onClick={cerrarMenu}>Portafolio</a></li>
          <li><a href="#contacto" onClick={cerrarMenu}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;