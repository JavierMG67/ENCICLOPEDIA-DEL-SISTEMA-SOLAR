# Enciclopedia del Sistema Solar

Este proyecto es una plataforma educativa interactiva que presenta información detallada sobre los planetas y la estrella principal del Sistema Solar. Fue desarrollado como parte del Laboratorio #1 para la materia ISW-521 en la UTN, aplicando las mejores prácticas de desarrollo frontend.

## Estado Actual del Proyecto

El proyecto es una aplicación web de una sola página (SPA) completamente funcional, construida con HTML5, CSS3 y JavaScript puro (Vanilla JS), sin dependencias de frameworks externos. Se ha refactorizado para cumplir con altos estándares de semántica, accesibilidad y rendimiento.

### Estructura de Archivos

```
/
├── css/
│   └── main.css
├── img/
│   ├── sun.webp
│   ├── mercury.webp
│   ├── venus.webp
│   ├── earth.webp
│   ├── mars.webp
│   ├── jupiter.webp
│   ├── saturn.webp
│   ├── uranus.webp
│   └── neptune.webp
├── js/
│   └── app.js
└── laboratorio-01/
    └── index.html
```

### Características Implementadas

#### 1. **HTML Semántico y Accesible (`index.html`)**

- **Estructura Moderna:** Utiliza etiquetas semánticas de HTML5 como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<dl>`, `<dt>`, `<dd>` y `<footer>` para una estructura clara y accesible.
- **Catálogo Extendido:**
  - Se ha añadido el **Sol** como una nueva entrada en el catálogo, clasificado como tipo "estrella".
  - Cada cuerpo celeste se representa con un `<article>` que contiene una `<figure>` para la imagen y una lista de descripción (`<dl>`) para los datos técnicos.
  - Los datos de cada planeta están estructurados correctamente con `<dt>` (término) y `<dd>` (descripción), mejorando la semántica sobre la implementación anterior con `<ul>`.
- **Accesibilidad (WCAG 2.1):**
  - Se utilizan atributos ARIA como `aria-label`, `aria-labelledby` y `aria-pressed` para mejorar la experiencia de usuarios con lectores de pantalla.
  - Todas las imágenes (`<img>`) tienen texto alternativo (`alt`) descriptivo y específico.
- **Rendimiento de Imágenes:**
  - Se utilizan imágenes en formato **`.webp`** para una mejor compresión y calidad.
  - Se han añadido los atributos `loading="lazy"` y `decoding="async"` para optimizar la carga de imágenes y mejorar el rendimiento percibido.

#### 2. **Estilos y Diseño Responsivo (`main.css`)**

- **CSS Moderno:** El diseño se basa en **CSS Grid** para el catálogo y **Flexbox** para la navegación y los controles, creando un layout robusto y adaptable.
- **Variables CSS:** Se utilizan variables (`:root`) para gestionar la paleta de colores, tipografía y espaciado, facilitando el mantenimiento del tema oscuro.
- **Diseño Responsivo:**
  - El sitio es completamente funcional en dispositivos móviles y de escritorio.
  - Utiliza `media queries` en `768px` y `480px` para ajustar el layout en diferentes tamaños de pantalla.
- **Foco Visible:** Se ha implementado un estado de `:focus-visible` claro y distintivo para garantizar una navegación por teclado accesible.
- **Nuevos Estilos:** Se han añadido clases como `.ficha-tecnica` y `.descripcion-extendida` para dar formato a la nueva estructura de datos.

#### 3. **Interactividad y Experiencia de Usuario (`app.js`)**

- **Filtrado Dinámico:**
  - Los usuarios pueden filtrar los cuerpos celestes por tipo (Todos, Rocoso, Gaseoso, Helado, Estrella).
  - La lógica de filtrado se ha actualizado para incluir el nuevo tipo "estrella".
- **Persistencia de Estado:**
  - La selección de filtro del usuario se guarda en el **`localStorage`** del navegador. Al recargar la página, el último filtro se aplica automáticamente.
- **Navegación Suave (Smooth Scrolling):**
  - Se ha implementado un desplazamiento suave (`scrollIntoView({ behavior: 'smooth' })`) para los enlaces de navegación interna (`#inicio`, `#catalogo`), mejorando la experiencia de usuario.
- **Manejo de Eventos:** El script se ejecuta después de que el DOM esté completamente cargado (`DOMContentLoaded`) para asegurar que todos los elementos estén disponibles.

### Tecnologías Utilizadas

- **HTML5**
- **CSS3** (Grid, Flexbox, Variables, Media Queries)
- **JavaScript (ES6+)** (Vanilla JS, DOM Manipulation, Local Storage)

### Cómo Ejecutar el Proyecto

Simplemente abre el archivo `laboratorio-01/index.html` en cualquier navegador web moderno. No se requiere un servidor local ni pasos de compilación.
