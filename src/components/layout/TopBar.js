import React from 'react';

const TopBar = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">Bienvenido <span>Wilder</span> </p>

      <nav className="nav-principal">
        <a href="#">Cerrar Sesión</a>
      </nav>
    </header>
  );
}

export default TopBar;