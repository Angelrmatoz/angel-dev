# Stage 1: Base
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# Stage 2: Development (para docker-compose.dev.yml)
FROM base AS development
ENV NODE_ENV=development
WORKDIR /app

# Crear directorio /pnpm con permisos
RUN mkdir -p /pnpm/store && chmod -R 777 /pnpm

# Limpiar cualquier build cache previo
RUN rm -rf dist node_modules 2>/dev/null || true

# Copiar solo los archivos de configuración
COPY package.json pnpm-lock.yaml* .npmrc* ./

# Exponer el puerto
EXPOSE 9000

# El comando se sobreescribe en docker-compose.dev.yml
CMD ["sh", "-c", "pnpm install && pnpm run dev"]

# Stage 3: Dependencias (Nombre: deps)
FROM base AS deps
COPY package.json pnpm-lock.yaml* .npmrc* ./
RUN pnpm install --frozen-lockfile --shamefully-hoist

# Stage 4: Build (Nombre: build)
FROM base AS build
WORKDIR /app
# Aquí referenciamos la etapa anterior "deps"
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# Stage 5: Dependencias de Producción (Nombre: prod-deps)
FROM base AS prod-deps
COPY package.json pnpm-lock.yaml* .npmrc* ./
RUN pnpm install --prod --frozen-lockfile

# Stage 6: Imagen Final (Producción)
FROM base AS production
WORKDIR /app
ENV NODE_ENV=production

# Copiamos desde las etapas anteriores "prod-deps" y "build"
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./

USER node
CMD ["node", "dist/index.js"]
