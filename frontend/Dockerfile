FROM node:18-slim AS builder
WORKDIR /app

# Copy everything, then flatten if the build context is the repo root
# (context = /frontend -> already flat; context = / -> has a frontend/ subfolder)
COPY . .
RUN if [ -f frontend/package.json ]; then cp -r frontend/. . ; fi

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
RUN npm install
RUN npm run build

# ── Serve built static assets with Nginx ───────────────────
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
