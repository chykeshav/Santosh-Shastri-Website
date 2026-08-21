# syntax=docker/dockerfile:1
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
RUN npm run build

# Serve built assets with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Nginx config: handle React Router client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
