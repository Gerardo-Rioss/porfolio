import React from 'react';
import styles from './About.module.css';

interface PersonalData {
  label: string;
  value: string;
}

interface Interest {
  icon: string;
  name: string;
}

const About: React.FC = () => {
  const personalData: PersonalData[] = [
    { label: 'Cumpleaños', value: '26-02-1987' },
    { label: 'Teléfono', value: '(0362) 154709877' },
    { label: 'Email', value: 'gerarios26@gmail.com' },
    { label: 'Dirección', value: 'Pasaje Castelli 4460' },
    { label: 'Ciudad', value: 'Barranqueras - Chaco' }
  ];

  const interests: Interest[] = [
    { icon: 'fa-solid fa-headphones', name: 'MUSICA' },
    { icon: 'fa-solid fa-plane', name: 'VIAJAR' },
    { icon: 'fa-solid fa-person-hiking', name: 'DEPORTE' },
    { icon: 'fa-solid fa-book', name: 'LIBROS' }
  ];

  return (
    <section id="sobremi" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Sobre Mí</h2>
        
        <div className={styles.content}>
          <div className={styles.description}>
            <p>
              <span className={styles.highlight}>Hola, Soy Analista de Sistemas</span> 
              Analista de Sistemas orientado al desarrollo full stack, soporte técnico y
              análisis de datos. Manejo tecnologías como .NET, Python, Java y
              actualmente me especializo en React.
            </p>
            <p>
              Apasionado por la mejora continua, disfruto transformar necesidades de negocio en soluciones sólidas y
              escalables, desde el diagnóstico inicial hasta la puesta en producción y el soporte post‑implementación.
            </p>
            <p>
              Destaco por mi capacidad de comunicación con equipos multidisciplinarios, mi enfoque en la calidad del código y mi
              entusiasmo por las buenas prácticas ágiles y el aprendizaje constante. Busco seguir creciendo como
              desarrollador, aportando ideas innovadoras que generen impactos reales y medibles en las organizaciones.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Datos Personales</h3>
              <ul className={styles.dataList}>
                {personalData.map((item, index) => (
                  <li key={index}>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Intereses</h3>
              <div className={styles.interests}>
                {interests.map((interest, index) => (
                  <div key={index} className={styles.interest}>
                    <i className={interest.icon}></i>
                    <span>{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

