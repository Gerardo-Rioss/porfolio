import React, { useState } from 'react';
import styles from './Contact.module.css';

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  tema: string;
  mensaje: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    telefono: '',
    email: '',
    tema: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

    try {
      const response = await fetch('https://formsubmit.co/gerarios26@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Mensaje enviado con éxito!');
        setFormData({
          nombre: '',
          telefono: '',
          email: '',
          tema: '',
          mensaje: ''
        });
      } else {
        alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>CONTACTO</h2>
        
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <i className="fa-solid fa-envelope"></i>
              <h3>Email</h3>
              <p>gerarios26@gmail.com</p>
            </div>
            
            <div className={styles.infoCard}>
              <i className="fa-solid fa-phone"></i>
              <h3>Teléfono</h3>
              <p>(0362) 154709877</p>
            </div>
            
            <div className={styles.infoCard}>
              <i className="fa-solid fa-location-dot"></i>
              <h3>Ubicación</h3>
              <p>Barranqueras - Chaco, Argentina</p>
            </div>
          </div>

          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu Nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                />
              </div>
              
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Número telefónico"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              </div>
              
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Dirección de correo"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                />
              </div>
              
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="tema"
                  placeholder="Tema"
                  value={formData.tema}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              </div>
              
              <div className={styles.formGroup}>
                <textarea
                  name="mensaje"
                  placeholder="Mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={styles.formTextarea}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <i className="fa-solid fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
