import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../theme/NavBar.css';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet"/>
        <a onClick={toggleMenu}>Lav Kalsi</a>
      </div>
    
      <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
        <li className="nav-item">
          <a href="#home" onClick={closeMenu}>Home</a>
        </li>
        <li className="nav-item">
          <a href="#education" onClick={closeMenu}>Education</a>
        </li>
        <li className="nav-item">
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>
        <li className="nav-item">
          <a href="#Experience" onClick={closeMenu}>Experience</a>
        </li>
        <li className="nav-item">
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>
        <li className="nav-item">
          <a href="#Certificates" onClick={closeMenu}>Certificates</a>
        </li>
        <li className="nav-item">
          <a href="#contacts" onClick={closeMenu}>Contact</a>
        </li>
        
      </ul>
      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100009068224498">
          <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
        </a>
        <a href="https://www.linkedin.com/in/lavkalsi/">
          <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
        </a>
        <a href="https://www.instagram.com/lavkalsi/">
          <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
        </a>
        <a href="https://x.com/KalsiLav">
          <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
