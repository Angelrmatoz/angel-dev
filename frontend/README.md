# Ángel Matos - Portfolio Frontend

Esta es la aplicación cliente del portafolio, construida con **Next.js 15** y optimizada para ofrecer una experiencia visual impactante.

## 🚀 Tecnologías

- **Next.js 15 (App Router)**
- **React 19**
- **Tailwind CSS**
- **Framer Motion**
- **Aceternity UI**
- **Lucide React / Tabler Icons**

## 🛠️ Características

- **Conexión Dinámica a la API**: El componente de proyectos intenta conectar primero al backend local (`localhost:3001`) y, si falla, utiliza automáticamente el backend desplegado en Vercel.
- **Diseño Responsivo**: Adaptado para móviles y escritorio.
- **Optimización de Imágenes**: Uso de `next/image` para carga eficiente.
- **Componentes Animados**: Timeline de experiencia y galería de proyectos.

## ⚙️ Configuración

Crea un archivo `.env` en la raíz de `frontend/`:

```env
# URL del backend local
NEXT_PUBLIC_API_URL=http://localhost:3001

# URL del backend en producción (Vercel)
NEXT_PUBLIC_API_VERCEL_URL=https://tu-backend.vercel.app
```

## 💻 Desarrollo Local

1.  Instalar dependencias:
    ```bash
    pnpm install
    ```
2.  Iniciar el servidor de desarrollo:
    ```bash
    pnpm run dev
    ```
    La aplicación estará disponible en `http://localhost:3000`.

## 📂 Estructura Principal

- `app/`: Rutas y layout de la aplicación.
- `components/`: Componentes UI (Experience, Projects, DockMenu, etc.).
- `public/`: Archivos estáticos como el CV y assets.

## 🚀 Despliegue

Puedes desplegar el frontend directamente en Vercel:

```bash
vercel --prod
```

Asegúrate de configurar las variables de entorno en el dashboard de Vercel.
