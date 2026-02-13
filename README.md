# Ángel Matos - Portfolio

Bienvenido a mi portafolio personal. Este proyecto es una aplicación web moderna diseñada para mostrar mi experiencia, habilidades y proyectos como desarrollador Full-Stack.

## 🚀 Tecnologías Principales

### Frontend
- **React 19 / Next.js**: Framework principal para una experiencia de usuario rápida y optimizada (SSR/SSG).
- **TypeScript**: Para un desarrollo robusto y tipado estático.
- **Tailwind CSS**: Estilizado moderno y responsivo.
- **Aceternity UI / Framer Motion**: Componentes visuales de alto impacto y animaciones fluidas.
- **Tabler Icons**: Set de iconos consistentes y profesionales.

### Backend & Herramientas
- **Node.js / Express**: Lógica del servidor y APIs.
- **Docker & Docker Compose**: Contenerización para un despliegue y desarrollo consistentes.
- **GitHub API**: Integración dinámica para mostrar proyectos en tiempo real.

## ✨ Características Destacadas

- **Sección de Experiencia**: Un Timeline interactivo que recorre mi trayectoria profesional con detalles de tecnologías usadas en cada etapa.
- **Galería de Proyectos Dinámica**: Integración directa con la API de GitHub. Los proyectos se muestran automáticamente si tienen el tópico `portfolio` o se listan los más recientes.
- **Menú Flotante (Floating Dock)**: Navegación elegante con acceso rápido a redes sociales y descarga de CV.
- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio.
- **Efectos Visuales**: Fondos animados, efectos de hover 3D y desenfoques de cristal (backdrop-blur).

## 📂 Estructura del Proyecto

```text
angel-dev/
├── frontend/             # Aplicación Next.js
│   ├── app/              # Rutas y páginas principales
│   ├── components/       # Componentes de React (UI y Secciones)
│   ├── public/           # Archivos estáticos (Imágenes, CV, etc.)
│   └── docker-compose.yml # Configuración de Docker para frontend
├── backend/              # Lógica del servidor (si aplica)
└── README.md             # Documentación del proyecto
```

## 🛠️ Instalación y Configuración

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Angelrmatoz/angel-dev.git
   cd angel-dev
   ```

2. **Instalar dependencias (Frontend)**:
   ```bash
   cd frontend
   npm o pnpm install
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   npm o pnpm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`.

4. **Uso con Docker**:
   ```bash
   docker-compose up --build
   ```

## 📄 Personalización del Portafolio

- **Proyectos**: Para que un proyecto de GitHub aparezca en la sección "Proyectos Recientes", añade el tópico `portfolio` en la configuración de tu repositorio en GitHub.
- **CV**: Coloca tu archivo `CV.pdf` en `frontend/public/resume/` y asegúrate de que el nombre coincida con el configurado en `DockMenu.tsx`.

---
Desarrollado con ❤️ por [Ángel Matos](https://github.com/Angelrmatoz)