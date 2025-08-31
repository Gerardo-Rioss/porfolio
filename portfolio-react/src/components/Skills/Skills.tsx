import React from 'react';
import styles from './Skills.module.css';

interface Skill {
  name: string;
  percentage: number;
}

const Skills: React.FC = () => {
  const technicalSkills: Skill[] = [
    { name: 'Javascript', percentage: 75 },
    { name: 'HTML & CSS', percentage: 89 },
    { name: '.NET', percentage: 95 },
    { name: 'Python', percentage: 81 },
    { name: 'Análisis de Datos', percentage: 55 }
  ];

  const professionalSkills: Skill[] = [
    { name: 'Comunicación', percentage: 80 },
    { name: 'Trabajo en Equipo', percentage: 70 },
    { name: 'Creatividad', percentage: 99 },
    { name: 'Dedicación', percentage: 65 },
    { name: 'Project Management', percentage: 94 }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Habilidades</h2>
        
        <div className={styles.grid}>
          <div className={styles.skillColumn}>
            <h3>Técnicas</h3>
            <div className={styles.skillsList}>
              {technicalSkills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercentage}>{skill.percentage}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillColumn}>
            <h3>Profesionales</h3>
            <div className={styles.skillsList}>
              {professionalSkills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercentage}>{skill.percentage}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
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

export default Skills;

