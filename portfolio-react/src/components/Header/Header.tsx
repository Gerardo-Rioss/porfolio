import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#inicio" onClick={() => scrollToSection('inicio')}>
            Rios
          </a>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><a href="#inicio" onClick={() => { scrollToSection('inicio'); handleNavClick(); }}>INICIO</a></li>
            <li><a href="#sobremi" onClick={() => { scrollToSection('sobremi'); handleNavClick(); }}>SOBRE MI</a></li>
            <li><a href="#skills" onClick={() => { scrollToSection('skills'); handleNavClick(); }}>HABILIDADES</a></li>
            <li><a href="#curriculum" onClick={() => { scrollToSection('curriculum'); handleNavClick(); }}>CURRICULUM</a></li>
            <li><a href="#portfolio" onClick={() => { scrollToSection('portfolio'); handleNavClick(); }}>PROYECTOS</a></li>
            <li><a href="#contacto" onClick={() => { scrollToSection('contacto'); handleNavClick(); }}>CONTACTO</a></li>
          </ul>
        </nav>

        <div className={styles.controls}>
          <button 
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
          >
            <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>

          <button 
            className={styles.menuToggle}
            onClick={handleMenuToggle}
            aria-label="Abrir menú"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

