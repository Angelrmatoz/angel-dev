# Portfolio Backend (API)

Este servidor backend gestiona la integración con la API de GitHub mediante GraphQL para obtener los repositorios destacados, optimizado para ejecutarse como **Serverless Function** en Vercel.

## 🚀 Tecnologías

- **Node.js** (v20+) con **TypeScript**.
- **Apollo Server v4** (GraphQL) sobre **Express**.
- **Vercel Serverless Functions**: Despliegue optimizado sin servidor permanente.
- **GitHub GraphQL API**: Consulta eficiente de datos de usuario y repositorios.

## ⚙️ Configuración de Entorno

Crea un archivo `.env` en `backend/` para desarrollo local:

```env
# Token de GitHub (Lectura de repositorios públicos)
GITHUB_TOKEN=ghp_tu_token_aqui

# Puerto de escucha (Local)
PORT=3001

# Orígenes permitidos (CORS) - Separados por comas
ALLOWED_ORIGIN=http://localhost:3000,https://tu-frontend.vercel.app
```

## 🛡️ Sistema de CORS Dinámico

El servidor implementa una lógica de seguridad avanzada para Vercel:

1. **WhiteList**: Acepta cualquier URL listada en la variable `ALLOWED_ORIGIN`.
2. **Auto-Preview**: Acepta automáticamente peticiones que provengan de dominios `.vercel.app` que contengan el nombre del proyecto (`angel-dev`), facilitando las pruebas en las ramas de desarrollo sin configurar nada extra.

## 💻 Ejecución Local

1. **Instalar dependencias**: `pnpm install`
2. **Modo Standalone**: `pnpm run dev` (Disponible en `http://localhost:3001`).
3. **Modo Vercel Dev**: `pnpm run dev:vercel` (Simula funciones serverless localmente).

## 🌍 Despliegue

El despliegue está automatizado mediante **GitHub Actions**. El archivo `vercel.json` configura el constructor `@vercel/node` para procesar el entry point en `api/index.ts`.

---

Desarrollado por [Ángel Matos](https://github.com/Angelrmatoz)
