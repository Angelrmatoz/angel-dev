# GitHub Portfolio Backend

Este es el servidor backend para el portafolio profesional, encargado de gestionar la integración con la API de GitHub mediante GraphQL para obtener los repositorios destacados (Pinned Repositories).

## 🚀 Tecnologías

- **Node.js** (v20+)
- **TypeScript**
- **Apollo Server v4** (GraphQL)
- **Express**
- **tsx** (Desarrollo con soporte nativo de ESM)
- **Vercel** (Despliegue como Serverless Function)

## 🛠️ Estructura del Proyecto

```text
backend/
├── api/
│   └── index.ts        # Punto de entrada para Vercel (Serverless)
├── src/
│   ├── graphql/        # Esquema y Lógica de GraphQL
│   │   ├── resolvers/  # Funciones que resuelven las consultas
│   │   └── typeDefs/   # Definiciones de tipos (SDL)
│   ├── services/       # Integración con APIs externas (GitHub)
│   ├── utils/          # Configuraciones y utilidades
│   └── index.ts        # Punto de entrada del servidor local
├── vercel.json         # Configuración de despliegue en Vercel
└── package.json        # Scripts y dependencias
```

## ⚙️ Configuración

1.  Crea un archivo `.env` o `.env.local` en la carpeta `backend/`:
    ```env
    GITHUB_TOKEN=tu_personal_access_token_aqui
    PORT=3001
    ALLOWED_ORIGIN=http://localhost:3000
    ```
2.  Asegúrate de tener un **GitHub Personal Access Token** con permisos de lectura de repositorios públicos.

## 💻 Ejecución Local

1.  Instalar dependencias:
    ```bash
    pnpm install
    ```
2.  Iniciar en modo desarrollo (Standalone):

    ```bash
    pnpm run dev
    ```

    El servidor estará disponible en `http://localhost:3001`.

3.  Iniciar con Vercel Dev (Recomendado):
    ```bash
    pnpm run dev:vercel
    ```
    Esto simula el entorno de Vercel localmente en el puerto `3001`.

## 🚀 Despliegue

El proyecto está configurado para desplegarse en **Vercel**. El archivo `vercel.json` redirige todas las peticiones a `api/index.ts`.

Comando de despliegue:

```bash
vercel --prod
```

## 🔍 Consultas de Prueba

Puedes probar el funcionamiento en el servidor (`http://localhost:3001`) con la siguiente consulta:

```graphql
query {
  pinnedRepos(username: "Angelrmatoz") {
    name
    description
    stargazerCount
    url
    primaryLanguage {
      name
      color
    }
  }
}
```

## 📝 Notas de Desarrollo

- **ES Modules (ESM)**: Se utiliza de forma nativa.
- **CORS**: Configurado para permitir peticiones desde el frontend (puerto 3000 por defecto).
- **Vercel Compatibility**: Se utiliza `@vercel/node` para manejar la API como una función única.
