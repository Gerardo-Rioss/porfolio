import React from 'react';
import styles from './Curriculum.module.css';

interface EducationItem {
  id: number;
  title: string;
  institution: string;
  year: string;
  description: string;
}

interface WorkItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

const Curriculum: React.FC = () => {
  const education: EducationItem[] = [
    {
      id: 1,
      title: 'Analista de Sistemas',
      institution: 'UEP Nº 87 - CENTRO INTEGRAL DE ESTUDIOS R.A.',
      year: '2010',
      description: 'Formación orientada al desarrollo y análisis de sistemas informáticos. Aprendí diseño y programación de aplicaciones, gestión de bases de datos, análisis de requerimientos, modelado de datos y metodologías ágiles. La carrera culminó con el desarrollo de un sistema integral para una hamburguesería, abarcando gestión de clientes, pedidos, insumos y facturación.'
    },
    {
      id: 2,
      title: 'Analista Programador',
      institution: 'UEP Nº 87 - CENTRO INTEGRAL DE ESTUDIOS R.A.',
      year: '2008 - 2009',
      description: 'Formación orientada al desarrollo de software, con especial énfasis en el lenguaje .NET y bases de datos SQL. Aprendí diseño y programación de aplicaciones, creación y gestión de bases de datos relacionales, así como análisis y solución de problemas informáticos. Este título intermedio fortaleció mis habilidades en desarrollo y modelado de datos.'
    },
    {
      id: 3,
      title: 'Bachiller',
      institution: 'Escuela de nivel secundario Gral. José María Paz Nº 76',
      year: '2000 - 2004',
      description: 'Formación en ciencias básicas y humanísticas, desarrollando habilidades analíticas, comunicativas y organizativas. Este título brindó una base sólida para el aprendizaje continuo y el desarrollo de competencias clave en diferentes áreas académicas y profesionales.'
    }
  ];

  const workExperience: WorkItem[] = [
    {
      id: 1,
      title: 'Técnico en Soporte Informático - CPI (Centro de Procesamiento Informático)',
      company: 'InSSSeP',
      period: '2011 - Actualidad',
      description: 'Actualmente desempeño el rol de técnico de soporte en una obra social, brindando asistencia técnica integral a usuarios internos. Mi labor incluye la reparación y mantenimiento de equipos de cómputo, diagnóstico y solución de problemas tanto de hardware como de software, así como configuraciones de sistemas operativos y programas específicos. También gestiono incidencias relacionadas con la conectividad y realizo ajustes en configuraciones personalizadas para optimizar el desempeño de los equipos, contribuyendo a la continuidad operativa y la satisfacción del usuario final.'
    },
    {
      id: 2,
      title: 'Operador de ingreso de Mercadería - Farmacia Social',
      company: 'InSSSeP',
      period: '2008 - 2011',
      description: 'Trabajé en el sector de ingreso de mercadería de una farmacia, encargándome de la recepción y control de productos, verificando cantidades, vencimientos y calidad de la mercadería. Realicé la carga de los productos en los sistemas de gestión, asegurando una correcta actualización de inventarios y la disponibilidad de stock en tiempo real. Además, mantenía comunicación constante con proveedores para resolver incidencias y asegurar el flujo adecuado de mercadería.'
    }
  ];

  return (
    <section id="curriculum" className={styles.curriculum}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Curriculum</h2>
        
        <div className={styles.content}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <i className="fa-solid fa-graduation-cap"></i>
              Educación
            </h3>
            <div className={styles.timeline}>
              {education.map((item) => (
                <div key={item.id} className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    <span className={styles.institution}>{item.institution}</span>
                    <span className={styles.period}>{item.year}</span>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                  <div className={styles.timelineConnector}>
                    <div className={styles.connectorDot}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <i className="fa-solid fa-briefcase"></i>
              Experiencia de Trabajo
            </h3>
            <div className={styles.timeline}>
              {workExperience.map((item) => (
                <div key={item.id} className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    <span className={styles.company}>{item.company}</span>
                    <span className={styles.period}>{item.period}</span>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                  <div className={styles.timelineConnector}>
                    <div className={styles.connectorDot}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;

