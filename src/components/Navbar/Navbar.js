import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de importar tu archivo CSS

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <ul>
          <li>
            <Link to="/Home" className="title">Inicio</Link>
          </li>
          <li>
            <Link to="/Medicalservices" className="title">Servicios</Link>
          </li>
          <li>
            <Link to="/News" className="title">Noticias</Link>
          </li>
          <li>
            <Link to="/School" className="title">Capacitacion</Link>
          </li>
          <li>
            <Link to="/Frequentsasking" className="title">Preguntas</Link>
          </li>
          <li>
            <Link to="/Paymethod" className="title">Pago</Link>
          </li>
          <li>
            <Link to="/Contactus" className="title">Contactenos</Link>
          </li>
        </ul>
        
      </div>
      <div className="navbar-right">
        <ul>
        <li>
            <Link to="/Myhistory" className="title">Sobre mi</Link>
          </li>
          <li>
            <Link to="/Profile" className="title">Cuenta</Link>
          </li>
          <li>
            <Link to="/Settings" className="title">Ajustes</Link>
          </li>
          <li>
            <Link to="/Contactus" className="email">myemail@example.com</Link>
          </li>
          <li>
            <Link to="/" className="sign-out">Salir</Link>
          </li>
        </ul>
      </div>
    </div>
      
  );
}

export default Navbar;
