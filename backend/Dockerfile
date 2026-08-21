FROM node:18-slim AS builder
WORKDIR /app

# better-sqlite3 is a native module and needs these to compile during npm install
RUN apt-get update && apt-get install -y --no-install-recommends python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy everything, then flatten if the build context is the repo root
# (context = /backend -> already flat; context = / -> has a backend/ subfolder)
COPY . .
RUN if [ -f backend/package.json ]; then cp -r backend/. . ; fi

RUN npm install
RUN npm run build

FROM node:18-slim
WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist
RUN mkdir -p /app/database

EXPOSE 3000
CMD ["node", "dist/server.js"]
