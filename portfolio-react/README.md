# Portfolio - Gerardo Rios

Un portfolio moderno y responsive desarrollado con React, TypeScript y CSS Modules.

## 🚀 Características

- **React + TypeScript**: Código tipado y escalable
- **CSS Modules**: Estilos modulares y encapsulados
- **Tema Claro/Oscuro**: Cambio dinámico de tema con persistencia
- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Gradientes Modernos**: Efectos visuales atractivos
- **Animaciones Suaves**: Transiciones fluidas y profesionales
- **Componentes Modulares**: Arquitectura escalable y mantenible

## 🛠️ Tecnologías Utilizadas

- React 18
- TypeScript
- CSS Modules
- Font Awesome Icons
- React Router DOM

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.module.css
│   ├── About/
│   │   ├── About.tsx
│   │   └── About.module.css
│   ├── Skills/
│   │   ├── Skills.tsx
│   │   └── Skills.module.css
│   ├── Portfolio/
│   │   ├── Portfolio.tsx
│   │   └── Portfolio.module.css
│   ├── Contact/
│   │   ├── Contact.tsx
│   │   └── Contact.module.css
│   └── Footer/
│       ├── Footer.tsx
│       └── Footer.module.css
├── context/
│   └── ThemeContext.tsx
├── App.tsx
└── index.tsx
```

## 🎨 Componentes

### Header
- Navegación responsive
- Toggle de tema claro/oscuro
- Menú hamburguesa para móviles

### Hero
- Sección de presentación principal
- Imagen de perfil con animación flotante
- Enlaces a redes sociales

### About
- Información personal
- Datos de contacto
- Intereses y hobbies

### Skills
- Barras de progreso animadas
- Skills técnicos y profesionales
- Efectos de shimmer

### Portfolio
- Tarjetas flip para proyectos
- Galería responsive
- Descripciones detalladas

### Contact
- Formulario de contacto funcional
- Información de contacto
- Validación de campos

### Footer
- Enlaces sociales
- Botón de scroll to top
- Copyright

## 🚀 Instalación y Uso

1. **Instalar dependencias**
```bash
npm install
```

2. **Ejecutar en desarrollo**
```bash
npm start
```

3. **Construir para producción**
```bash
npm run build
```

## 🎯 Funcionalidades Principales

### Tema Claro/Oscuro
- Cambio dinámico de colores
- Persistencia en localStorage
- Transiciones suaves

### Navegación Suave
- Scroll automático a secciones
- Navegación por anclas
- Header fijo con efecto de scroll

### Formulario de Contacto
- Integración con FormSubmit
- Validación de campos
- Estados de carga

### Portfolio Interactivo
- Tarjetas flip con CSS 3D
- Hover effects
- Información detallada de proyectos

## 📱 Responsive Design

- **Desktop**: Layout completo con grid
- **Tablet**: Adaptación de columnas
- **Mobile**: Stack vertical optimizado

## 🎨 Paleta de Colores

### Tema Claro
- Primary: #1e3a8a
- Secondary: #3b82f6
- Background: #ffffff
- Surface: #f8fafc

### Tema Oscuro
- Primary: #3b82f6
- Secondary: #60a5fa
- Background: #0f172a
- Surface: #1e293b

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `src/index.css`:

```css
:root {
  --primary-color: #tu-color;
  --secondary-color: #tu-color;
  /* ... */
}
```

### Agregar Proyectos
Modifica el array `projects` en `src/components/Portfolio/Portfolio.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Tu Proyecto',
    image: '/img/tu-imagen.png',
    description: 'Descripción del proyecto'
  }
];
```

### Modificar Skills
Actualiza los arrays en `src/components/Skills/Skills.tsx`:

```typescript
const technicalSkills: Skill[] = [
  { name: 'Tu Skill', percentage: 85 }
];
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Gerardo Rios**
- LinkedIn: [Gerardo Rios](https://www.linkedin.com/in/gerardrioss)
- GitHub: [Gerardo-Rioss](https://github.com/Gerardo-Rioss/)

---

Desarrollado con ❤️ usando React y TypeScript
