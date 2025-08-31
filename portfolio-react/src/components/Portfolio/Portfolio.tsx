import React, { useState } from 'react';
import styles from './Portfolio.module.css';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Blog sobre Cocina',
      image: '/img/BlogCocina.png',
      description: 'Blog de cocina desarrollado con Django y Python. Incluye gestión de usuarios con roles diferenciados (registrados, colaboradores y administradores), publicación de recetas, sistema de comentarios y medidas de seguridad personalizadas. Destaca por la implementación de permisos avanzados y conceptos de desarrollo colaborativo.'
    },
    {
      id: 2,
      title: 'Dashboard de Análisis de Datos',
      image: '/img/Dashboard.jpg',
      description: 'Dashboard interactivo en Power BI para análisis de datos reales. Permite responder preguntas clave sobre ventas, clientes y productos mediante exploración de datos, visualizaciones dinámicas y optimización del modelo de datos. Demuestra habilidad para transformar datos complejos en insights accionables.'
    },
    {
      id: 3,
      title: 'JuliJo - Showroom de Venta de Ropas',
      image: '/img/Showroom.png',
      description: 'Sistema en .NET para showroom de ropa con funcionalidades de gestión de ventas, control de stock y generación de reportes estratégicos. Centraliza y automatiza procesos, mejorando la eficiencia operativa y ofreciendo una experiencia fluida para el negocio y clientes.'
    },
    {
      id: 4,
      title: 'MrBrook - Hamburgueseria',
      image: '/img/Hamburgueseria.png',
      description: 'Sistema integral para hamburguesería que optimiza gestión de clientes, inventario, pedidos y facturación. Incluye módulos para registro de clientes, control de stock con alertas, gestión de pedidos en tiempo real y emisión de tickets con reportes diarios. Utiliza SQL Server para base de datos relacional eficiente.'
    },
    {
      id: 5,
      title: 'Griffith\'s - Peluqueria',
      image: '/img/Peluqueria.png',
      description: 'Sistema integral para peluquerías con control de stock, administración de promociones, registro de clientes, gestión de turnos y servicios personalizados. Incluye reportes detallados para apoyar decisiones estratégicas y mejorar la experiencia del cliente.'
    }
  ];

  const handleCardClick = (projectId: number) => {
    setFlippedCard(flippedCard === projectId ? null : projectId);
  };

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>PROYECTOS</h2>
        
        <div className={styles.gallery}>
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`${styles.projectCard} ${flippedCard === project.id ? styles.flipped : ''}`}
              onClick={() => handleCardClick(project.id)}
            >
              <div className={styles.cardFace}>
                <div className={styles.cardFront}>
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                  <div className={styles.cardOverlay}>
                    <i className="fa-solid fa-eye"></i>
                    <span>Ver detalles</span>
                  </div>
                </div>
                <div className={styles.cardBack}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.cardOverlay}>
                    <i className="fa-solid fa-arrow-left"></i>
                    <span>Volver</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
