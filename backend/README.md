# GitHub Portfolio Backend

Este es el servidor backend para el portafolio profesional, encargado de gestionar la integración con la API de GitHub mediante GraphQL para obtener los repositorios destacados (Pinned Repositories).

## 🚀 Tecnologías

- **Node.js** (v20+)
- **TypeScript**
- **Apollo Server** (GraphQL)
- **Express**
- **tsx** (Desarrollo con soporte nativo de ESM)
- **Docker** & **Docker Compose**

## 🛠️ Estructura del Proyecto

```text
backend/
├── src/
│   ├── graphql/        # Esquema y Lógica de GraphQL
│   │   ├── resolvers/  # Funciones que resuelven las consultas
│   │   └── typeDefs/   # Definiciones de tipos (SDL)
│   ├── services/       # Integración con APIs externas (GitHub)
│   ├── utils/          # Configuraciones y utilidades
│   └── index.ts        # Punto de entrada del servidor
├── Dockerfile          # Configuración de imagen (Multi-stage)
├── docker-compose.yml  # Orquestación para producción
└── docker-compose.dev.yml # Orquestación para desarrollo con Hot Reload
```

## ⚙️ Configuración

1.  Crea un archivo `.env` en la carpeta `backend/` basado en `.env.template`:
    ```env
    GITHUB_TOKEN=tu_personal_access_token_aqui
    PORT=9000
    ```
2.  Asegúrate de tener un **GitHub Personal Access Token** con permisos de lectura de repositorios públicos.

## 📦 Ejecución con Docker (Recomendado)

### Desarrollo (con Hot Reload)
```bash
docker-compose -f docker-compose.dev.yml up --build
```
El servidor estará disponible en `http://localhost:9000/graphql`.

### Producción
```bash
docker-compose up --build
```

## 💻 Ejecución Local

1.  Instalar dependencias:
    ```bash
    pnpm install
    ```
2.  Iniciar en modo desarrollo:
    ```bash
    pnpm run dev
    ```

## 🔍 Consultas de Prueba

Puedes probar el funcionamiento en el Apollo Sandbox (`http://localhost:9000/graphql`) con la siguiente consulta:

```graphql
query {
  pinnedRepos(username: "TuUsuarioDeGitHub") {
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

- Se utiliza el modo **ES Modules (ESM)** de forma nativa.
- Se ha configurado el modo `hoisted` para `pnpm` en Docker para asegurar la compatibilidad con volúmenes de Windows.
- El servidor utiliza `tsx watch` para reiniciar automáticamente ante cualquier cambio en el código.
