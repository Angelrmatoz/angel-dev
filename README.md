# Ángel Matos - Full Stack Portfolio

Este repositorio contiene mi portafolio profesional, dividido en una arquitectura de Frontend (Next.js) y Backend (Apollo Server/GraphQL), totalmente automatizado con CI/CD.

## 📂 Estructura del Repositorio

- **`/frontend`**: Aplicación web construida con **Next.js 15**, **Tailwind CSS** y **Framer Motion**.
- **`/backend`**: API GraphQL construida con **Node.js**, **Apollo Server** y **Express**, desplegada como una Serverless Function en Vercel.
- **`/.github/workflows`**: Automatización de pruebas, builds y despliegues con **GitHub Actions**.

## 🚀 Inicio Rápido

### Opción A: Usando Docker (Recomendado)

Si tienes Docker instalado, puedes iniciar todo el entorno (Frontend + Backend) con una sola línea de comandos desde la raíz del proyecto:

```bash
# Iniciar frontend (http://localhost:3000) y backend (http://localhost:3001)
docker compose up --build

# Para apagar limpiando volumenes y cache
docker compose down -v
```

---

### Opción B: Instalación Local

#### 1. Clonar el proyecto

```bash
git clone https://github.com/Angelrmatoz/angel-dev.git
cd angel-dev
```

#### 2. Configurar el Backend

```bash
cd backend
pnpm install
# Crear .env con tu GITHUB_TOKEN y ALLOWED_ORIGIN=http://localhost:3000
pnpm run dev:vercel
```

_Backend corriendo en `http://localhost:3001`_

#### 3. Configurar el Frontend

```bash
cd ../frontend
pnpm install
# Crear .env con NEXT_PUBLIC_API_URL=http://localhost:3001
pnpm run dev
```

_Frontend corriendo en `http://localhost:3000`_

## � Pipeline de CI/CD (GitHub Actions)

El proyecto cuenta con un flujo de trabajo automatizado que garantiza la estabilidad:

1. **Validación**: Cada `push` a `master` o `dev` dispara un build completo de frontend y backend.
2. **Despliegue Inteligente**:
   - **Rama `master`**: Despliegue automático a **Producción** en Vercel.
   - **Rama `dev`**: Despliegue automático a **Preview** en Vercel para pruebas.
3. **Versatilidad**: El despliegue solo ocurre si el build previo tiene éxito (`deploy needs validate`).

## 🛠️ Configuración de Despliegue (GitHub Secrets)

Para que el pipeline funcione, se requieren los siguientes Secrets en GitHub:

- `VERCEL_TOKEN`: Token de acceso personal de Vercel.
- `VERCEL_ORG_ID`: ID de tu equipo/usuario en Vercel.
- `VERCEL_PROJECT_ID_FRONTEND`: ID del proyecto frontend.
- `VERCEL_PROJECT_ID_BACKEND`: ID del proyecto backend.

## �🔌 Conexión Frontend-Backend

El frontend tiene una lógica de **fallback inteligente**:

1. Intenta conectar a `localhost:3001`.
2. Si falla (backend apagado), intenta conectar automáticamente a la URL de producción en Vercel.

Esto permite probar cambios locales o usar la API de producción sin cambiar el código.

---

Desarrollado por [Ángel Matos](https://github.com/Angelrmatoz) - 2026
