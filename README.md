# Ángel Matos - Full Stack Portfolio

Este repositorio contiene mi portafolio profesional, dividido en una arquitectura de Frontend (Next.js) y Backend (Apollo Server/GraphQL).

## 📂 Estructura del Repositorio

- **`/frontend`**: Aplicación web construida con **Next.js 15**, **Tailwind CSS** y **Framer Motion**.
- **`/backend`**: API GraphQL construida con **Node.js**, **Apollo Server** y **Express**, desplegada como una Serverless Function en Vercel.

## 🚀 Inicio Rápido

Para ejecutar todo el proyecto localmente:

### 1. Clonar el proyecto

```bash
git clone https://github.com/Angelrmatoz/angel-dev.git
cd angel-dev
```

### 2. Configurar el Backend

```bash
cd backend
pnpm install
# Crear .env con tu GITHUB_TOKEN
pnpm run dev:vercel
```

_Backend corriendo en `http://localhost:3001`_

### 3. Configurar el Frontend

```bash
cd ../frontend
pnpm install
# Crear .env con las URLs de la API
pnpm run dev
```

_Frontend corriendo en `http://localhost:3000`_

## 🔌 Conexión Frontend-Backend

El frontend tiene una lógica de **fallback inteligente**:

1. Intenta conectar a `localhost:3001`.
2. Si falla (backend apagado), intenta conectar automáticamente a la URL de producción en Vercel.

Esto permite probar cambios locales o usar la API de producción sin cambiar el código.

## 🛠️ Tecnologías Principales

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS, Aceternity UI.
- **Backend**: Apollo Server 4, GraphQL, Express, GitHub API Integration.
- **Despliegue**: Vercel (Frontend & Backend).

---

Desarrollado por [Ángel Matos](https://github.com/Angelrmatoz) - 2024
