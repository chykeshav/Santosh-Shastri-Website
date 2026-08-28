

FROM node:18-slim AS backend-builder
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends python3 make g++ \
    && rm -rf /var/lib/apt/lists/*
COPY . .
WORKDIR /app/backend
RUN npm install
RUN npm run build

FROM node:18-slim
WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

COPY --from=backend-builder /app/backend/package*.json ./backend/
RUN cd backend && npm install --omit=dev

COPY --from=backend-builder /app/backend/dist ./backend/dist
COPY --from=backend-builder /app/frontend/dist ./frontend/dist

RUN mkdir -p /app/database

EXPOSE 3000
CMD ["node", "backend/dist/server.js"]
