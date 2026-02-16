# Stage 1: Base & Dependencies
FROM node:20-slim AS base
RUN corepack enable
WORKDIR /app

# Stage 2: Development
FROM base AS development
ENV NODE_ENV=development
COPY package.json pnpm-lock.yaml* .npmrc* ./
# We will run install on startup in docker-compose for dev
CMD ["pnpm", "run", "dev"]

# Stage 3: Build
FROM base AS build
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# Stage 4: Production
FROM node:20-slim AS production
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
ENV NODE_ENV=production
CMD ["node", "dist/index.js"]
