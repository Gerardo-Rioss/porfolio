import React, { useState } from 'react';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'gerardo@example.com',
      link: 'mailto:gerardo@example.com'
    },
    {
      icon: '📱',
      title: 'Teléfono',
      value: '+34 123 456 789',
      link: 'tel:+34123456789'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      value: 'Madrid, España',
      link: 'https://maps.google.com/?q=Madrid,Spain'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/gerardo',
      link: 'https://linkedin.com/in/gerardo'
    }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contacto</h2>
        
        <div className={styles.content}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            {contactInfo.map((info, index) => (
              <div key={index} className={styles.infoCard}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                  {info.icon}
                </div>
                <h3>{info.title}</h3>
                <a 
                  href={info.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                >
                  {info.value}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Tu email"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Asunto"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tu mensaje"
                  className={styles.formTextarea}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? (
                  <>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>📤</span>
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div style={{ 
                  color: '#10b981', 
                  textAlign: 'center', 
                  padding: '1rem',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '8px',
                  marginTop: '1rem'
                }}>
                  ¡Mensaje enviado con éxito! Te responderé pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{ 
                  color: '#ef4444', 
                  textAlign: 'center', 
                  padding: '1rem',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  borderRadius: '8px',
                  marginTop: '1rem'
                }}>
                  Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

