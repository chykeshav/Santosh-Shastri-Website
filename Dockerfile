FROM node:18-alpine AS builder
WORKDIR /app
RUN apk add --no-cache python3 make g++
COPY backend/package*.json ./
RUN npm install
COPY backend/tsconfig*.json ./
COPY backend/src ./src
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN apk add --no-cache python3 make g++
COPY backend/package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app/dist ./dist
RUN mkdir -p /app/database
EXPOSE 3000
CMD ["node", "dist/server.js"]
