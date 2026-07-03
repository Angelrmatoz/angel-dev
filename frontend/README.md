# Portfolio Frontend (Web App)

Esta es la aplicación cliente de mi portafolio profesional, construida con **Next.js 15** y diseñada para ofrecer una experiencia visual premium con animaciones fluidas y soporte para temas modernos.

## 🚀 Tecnologías

- **Next.js 15 (App Router)** & **React 19**.
- **Tailwind CSS**: Estilizado moderno y responsivo.
- **Framer Motion** & **Aceternity UI**: Micro-interacciones y componentes visuales avanzados.
- **Lucide React**: Iconografía de alta calidad.

## 🔌 Conexión Inteligente a la API

El frontend integra un sistema de conexión resiliente que facilita el desarrollo y la producción:

1. **Local First**: Intenta conectar automáticamente al backend en `http://localhost:3001`.
2. **Cloud Fallback**: Si el servidor local no está disponible, redirige las peticiones automáticamente a la API de producción en Vercel.

Esto garantiza que la web siempre tenga datos, incluso si estás trabajando solo en el frontend localmente.

## ⚙️ Configuración de Entorno

Crea un archivo `.env` en `frontend/`:

```env
# URL de la API (Producción/Fallback)
NEXT_PUBLIC_API_URL=https://tu-api-backend.vercel.app
```

## 💻 Desarrollo Local

### Opción A: Instalación Tradicional
1. **Instalar dependencias**: `pnpm install` (usa la versión de **pnpm v9.15.4** fijada para garantizar compatibilidad con Node 20).
2. **Iniciar servidor**: `pnpm run dev` (Disponible en `http://localhost:3000`).

### Opción B: Usando Docker (Entorno Aislado)
Puedes levantar únicamente el frontend en modo desarrollo dentro de un contenedor Docker:
```bash
# Levantar el contenedor del frontend
docker compose -f docker-compose.dev.yml up --build

# Detener el contenedor limpiando volúmenes de caché
docker compose -f docker-compose.dev.yml down -v
```

## 🌍 Despliegue

Automatizado mediante **GitHub Actions**. Cada cambio en las ramas `master` o `dev` genera un build validado que se despliega directamente a Vercel.

---

Desarrollado por [Ángel Matos](https://github.com/Angelrmatoz)
