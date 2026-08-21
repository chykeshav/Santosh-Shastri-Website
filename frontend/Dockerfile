FROM node:18-slim AS builder
WORKDIR /app

# Copy package files (works whether build context is / or /frontend)
COPY package*.json frontend/package*.json ./
RUN npm install

# Copy all source files
COPY . .
# If frontend subdirectory exists in container (root build context), flatten it
RUN if [ -d "frontend" ] && [ -f "frontend/package.json" ]; then cp -r frontend/* ./ ; fi

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
RUN npm run build

# ── Serve built static assets with Nginx ───────────────────
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
