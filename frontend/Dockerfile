# --- Build dependencies -----------------------------------------------------
FROM node:20-alpine AS deps
WORKDIR /app
# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy dependency manifests and install (cached layer)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --store-dir /pnpm/store

# --- Builder ---------------------------------------------------------------
FROM node:20-alpine AS builder
WORKDIR /app
# Install dependencies in the builder stage (safer with pnpm's hoisted store)
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN CI=true PNPM_CONFIG_PACKAGE_IMPORT_METHOD=copy pnpm install --frozen-lockfile --shamefully-hoist --store-dir /pnpm/store

# Copy the rest of the project and build
COPY . .
# Build the Next.js app (requires next.config.js with output: 'standalone')
RUN pnpm build

# --- Dev stage (used by docker-compose.dev.yml) ---------------------------
FROM node:20-alpine AS dev
WORKDIR /app
ENV CI=true
# Move pnpm store outside of /app to avoid host pollution when using bind mounts
ENV PNPM_CONFIG_STORE_DIR=/pnpm/store
ENV PNPM_CONFIG_PACKAGE_IMPORT_METHOD=copy
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --store-dir /pnpm/store
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "pnpm install --store-dir /pnpm/store || pnpm install --store-dir /pnpm/store --force && pnpm dev -H 0.0.0.0"]

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