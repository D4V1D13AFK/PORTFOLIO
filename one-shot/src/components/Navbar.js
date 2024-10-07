import React from 'react';
import './Navbar.css'; // Archivo CSS personalizado
import logo from './logo.png'; // Ajusta la ruta según sea necesario

const MyNavbar = () => {
  return (
    <nav>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Product</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <span></span>
      </div>
    </nav>
  );
};

export default MyNavbar;






