import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img src="/img/FotoPerfil.jpg" alt="Gerardo Rios" className={styles.profileImage} />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
          
          <div className={styles.textContent}>
            <h1 className={styles.name}>RIOS GERARDO</h1>
            <h2 className={styles.title}>Analista de Sistemas</h2>
            <h3 className={styles.subtitle}>
              Analista de Sistemas | Desarrollador Full Stack Jr. (.NET / Python / React) | 
              Especialista en Soporte Técnico y Análisis de Datos con Power BI
            </h3>
            
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
          </div>
        </div>
        
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
