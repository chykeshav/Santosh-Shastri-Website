# syntax=docker/dockerfile:1
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json .
COPY vite.config.ts .
COPY tailwind.config.cjs .
COPY postcss.config.cjs .
COPY . .
RUN npm install
RUN npm run build

# Serve the built assets with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
