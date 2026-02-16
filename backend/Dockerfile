# Stage 1: Base
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# Stage 2: Dependencias (Nombre: deps)
FROM base AS deps
COPY package.json pnpm-lock.yaml* .npmrc* ./
RUN pnpm install --frozen-lockfile --shamefully-hoist

# Stage 3: Build (Nombre: build)
FROM base AS build
WORKDIR /app
# Aquí referenciamos la etapa anterior "deps"
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# Stage 4: Dependencias de Producción (Nombre: prod-deps)
FROM base AS prod-deps
COPY package.json pnpm-lock.yaml* .npmrc* ./
RUN pnpm install --prod --frozen-lockfile

# Stage 5: Imagen Final (Producción)
FROM base AS production
WORKDIR /app
ENV NODE_ENV=production

# Copiamos desde las etapas anteriores "prod-deps" y "build"
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./

USER node
CMD ["node", "dist/index.js"]
