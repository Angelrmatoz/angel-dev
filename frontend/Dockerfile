# --- Build dependencies -----------------------------------------------------
FROM node:20-alpine AS deps
WORKDIR /app
# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy dependency manifests and install (cached layer)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# --- Builder ---------------------------------------------------------------
FROM node:20-alpine AS builder
WORKDIR /app
# Install dependencies in the builder stage (safer with pnpm's hoisted store)
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN CI=true PNPM_CONFIG_PACKAGE_IMPORT_METHOD=copy pnpm install --frozen-lockfile --shamefully-hoist

# Copy the rest of the project and build
COPY . .
# Build the Next.js app (requires next.config.js with output: 'standalone')
RUN pnpm build

# --- Dev stage (used by docker-compose.dev.yml) ---------------------------
FROM node:20-alpine AS dev
WORKDIR /app
ENV CI=true

RUN corepack enable && corepack prepare pnpm@latest --activate

# Copiamos manifests e instalamos dependencias en la imagen DEV
# Esto asegura que node_modules exista antes de montar el volumen
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

EXPOSE 3000
CMD ["pnpm", "dev"]

# --- Runtime (standalone) -------------------------------------------------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy standalone server (server.js + minimal node_modules)
COPY --from=builder /app/.next/standalone ./
# Copy static assets
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
