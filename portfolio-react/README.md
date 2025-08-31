# Portfolio React

Un portfolio personal desarrollado con React y TypeScript.

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos para ejecutar localmente

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd portfolio-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 🌐 Despliegue en GitHub Pages

### Configuración inicial

1. **Instalar gh-pages** (ya incluido en package.json)
   ```bash
   npm install
   ```

2. **Configurar el repositorio remoto**
   ```bash
   git remote add origin <tu-repositorio-github>
   ```

3. **Desplegar**
   ```bash
   npm run deploy
   ```

### Configuración de GitHub Pages

1. Ve a tu repositorio en GitHub
2. Ve a Settings > Pages
3. En "Source", selecciona "Deploy from a branch"
4. Selecciona la rama `gh-pages` y la carpeta `/ (root)`
5. Haz clic en "Save"

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── About/          # Sección Acerca de
│   ├── Contact/        # Sección de Contacto
│   ├── Curriculum/     # Sección de CV
│   ├── Footer/         # Pie de página
│   ├── Header/         # Encabezado
│   ├── Hero/           # Sección principal
│   ├── Portfolio/      # Sección de proyectos
│   └── Skills/         # Sección de habilidades
├── context/            # Contexto de React (tema)
├── App.tsx             # Componente principal
└── index.tsx           # Punto de entrada
```

## 🎨 Características

- **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla
- **Tema Claro/Oscuro**: Cambio dinámico de tema
- **TypeScript**: Código tipado para mayor robustez
- **Componentes Modulares**: Arquitectura limpia y mantenible
- **CSS Modules**: Estilos encapsulados por componente

## 🛠️ Tecnologías Utilizadas

- React 18
- TypeScript
- CSS Modules
- React Router DOM
- Context API para gestión de estado

## 📝 Notas Importantes

- **No incluir node_modules**: El archivo `.gitignore` ya está configurado
- **Archivo .nojekyll**: Necesario para GitHub Pages
- **Build antes de deploy**: El script `deploy` ejecuta automáticamente el build

## 🔧 Solución de Problemas

### Error de Jekyll en GitHub Pages
Si ves errores relacionados con Jekyll, asegúrate de que:
1. El archivo `.nojekyll` esté presente en la raíz
2. La carpeta `node_modules` no esté incluida en el repositorio
3. Solo se despliegue la carpeta `build`

### El proyecto no se ejecuta localmente
1. Verifica que Node.js esté instalado: `node --version`
2. Elimina `node_modules` y `package-lock.json`
3. Ejecuta `npm install` nuevamente
4. Ejecuta `npm start`

## 📞 Soporte

Si tienes problemas, verifica:
1. Las versiones de Node.js y npm
2. Que todas las dependencias estén instaladas
3. Que no haya conflictos de puertos (el puerto 3000 debe estar libre)


