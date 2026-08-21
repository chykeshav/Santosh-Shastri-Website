# syntax=docker/dockerfile:1
FROM node:18-alpine AS builder
WORKDIR /app

# Install build tools needed for better-sqlite3 native compilation
RUN apk add --no-cache python3 make g++

COPY package.json package-lock.json ./
RUN npm ci
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# ── Production image ──────────────────────────────────────
FROM node:18-alpine
WORKDIR /app

# Install build tools for better-sqlite3 in prod install too
RUN apk add --no-cache python3 make g++

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

# Create persistent database directory
RUN mkdir -p /app/database

EXPOSE 3000
CMD ["node", "dist/server.js"]
