import React from 'react';
import './Navbar.css'; // Asegúrate de importar tu archivo CSS

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">Acerca de</a></li>
        <li><a href="/services">Servicios</a></li>
        <li><a href="/contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
