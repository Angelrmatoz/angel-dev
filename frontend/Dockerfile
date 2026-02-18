# Stage 1: Base
FROM node:20-alpine AS base
WORKDIR /app
# Variables para pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Stage 2: Dependencias (Común para producción)
FROM base AS deps
COPY package.json pnpm-lock.yaml* .npmrc* ./
RUN pnpm install --frozen-lockfile

# Stage 3: Desarrollo
FROM base AS dev
ENV NODE_ENV=development
WORKDIR /app

# Crear directorio /pnpm con permisos
RUN mkdir -p /pnpm/store && chmod -R 777 /pnpm

# Limpiar cualquier build cache previo
RUN rm -rf .next node_modules 2>/dev/null || true

# Copiar solo los archivos de configuración para que pnpm install funcione
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* .npmrc* ./

# Exponer el puerto
EXPOSE 3000

# El comando se sobreescribe en docker-compose.dev.yml
CMD ["sh", "-c", "pnpm install && pnpm run dev"]

# Stage 4: Builder (Para Producción)
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build

# Stage 5: Runner (Imagen Final de Producción)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar public desde builder
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Copiar todo el contenido del directorio standalone
# Esto incluye: server.js, package.json, .next/, node_modules optimizados
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Sobrescribir .next/static con los archivos estáticos optimizados
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
