import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/login">Iniciar Sesión</Link></li>
          <li><Link to="/signup">Registrarse</Link></li>
          <li><Link to="/profile">Perfil</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
