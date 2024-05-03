// Header.js

import React from 'react';
import './header.css'; // Importez votre fichier CSS pour le header


function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <img src="images/proprio.png"alt="Logo" className="proprio" />
          <span className="company-name">proprio.ci</span>
          
        </div>
        <div className="menu-items">
          <span>For Sale</span>
          <span>For Rent</span>
          <span>Land</span>
          <span>Commercial</span>
          <span className="for-agents">For Agents</span>
          <div className="logout-button">
            <img src="images/interrogation.png" alt="Log Off" className="logout-icon" />
            <span className="logo">Log Off</span>
  
          </div>
          <div className="person">
          <img src="images/personne.png"alt="Logo" className="proprio" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
