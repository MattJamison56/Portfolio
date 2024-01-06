import React, { useState, useEffect } from 'react';
import './navbar.css'; // Ensure you have this CSS file

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isSlide, setSlide] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1000) { // Change 200 to whatever offset you want
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      setSlide(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 500); 
    } else {
      setIsOpen(true);
      setTimeout(() => {
        setSlide(true);
      }, 10);
    }
  };

  const handleMenuClick = () => {
    toggleMenu();
  };

  return (
    <div className={`menu-container ${showMenu ? 'visible' : ''}`}>
      <div className="hamburger-menu">
        <button className={`hamburger-icon ${isSlide ? 'visible' : ''}`} onClick={toggleMenu}>
          <img src='/matthewjamisonportfolio/images/hamburger.png' className="hamimage"></img>
        </button>
        {isOpen && (
          <div className={`menu-list ${isSlide ? 'visible' : ''}`}>
            <a href="#" onClick={handleMenuClick}>Home</a>
            <a href="#about" onClick={handleMenuClick}>About</a>
            <a href="#projects" onClick={handleMenuClick}>Projects</a>
            <a href="#contact" onClick={handleMenuClick}>Contact</a>
          </div>
        )}
      </div>
      <div className="extra-buttons">
        <a className={`extra-button ${isSlide ? 'visible' : ''}`} href='https://www.linkedin.com/in/matthew-jamison-dev/' target="_blank"><img src='/matthewjamisonportfolio/images/linkedin.png' className="lnimage"></img></a>
        <a className={`extra-button ${isSlide ? 'visible' : ''}`} href='https://github.com/MattJamison56' target="_blank"><img src='/matthewjamisonportfolio/images/githubcat.png' className="gitimage"></img></a>
      </div>
    </div>
  );
};

export default HamburgerMenu;