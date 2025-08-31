import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <button onClick={scrollToTop} className={styles.scrollToTop}>
        <i className="fa-solid fa-angles-up"></i>
      </button>
      
      <div className={styles.socialLinks}>
        <a 
          href="https://www.linkedin.com/in/gerardrioss" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a 
          href="https://github.com/Gerardo-Rioss/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      
      <div className={styles.copyright}>
        <p>&copy; 2024 Gerardo Rios. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

