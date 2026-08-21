FROM node:18-slim AS builder
WORKDIR /app

# Copy package files (works whether context is root / or subfolder /backend)
COPY package*.json backend/package*.json ./
RUN npm install

# Copy tsconfig and src files
COPY tsconfig*.json backend/tsconfig*.json ./
COPY src/ backend/src/ ./src/

RUN npm run build

FROM node:18-slim
WORKDIR /app

COPY package*.json backend/package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist
RUN mkdir -p /app/database

EXPOSE 3000
CMD ["node", "dist/server.js"]
