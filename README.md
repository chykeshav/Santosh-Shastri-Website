# Santosh Shastri Court Marriage & Puja Website

Full‑stack web app (React + Vite frontend, Node/Express backend) with Jitsi video call integration, SQLite bookings, Gmail email notifications, basic‑auth admin, Dockerised for Render free tier.

## Project Structure (inside D:\\SantoshShastriWebsite)
```
SantoshShastriWebsite/
├─frontend/
│   ├─package.json
│   ├─vite.config.ts
│   ├─tailwind.config.cjs
│   ├─postcss.config.cjs
│   └─src/
│       ├─main.tsx
│       ├─App.tsx
│       └─components/ (Hero, Services, BookingForm, AdminDashboard, Gallery, Footer)
│   └─public/
│       ├─index.html
│       └─images/ (place provided photos here)
├─backend/
│   ├─package.json
│   ├─Dockerfile
│   └─src/
│       ├─server.ts
│       ├─db.ts
│       ├─routes.ts
│       └─auth.ts
├─docker-compose.yml
├─render.yaml
├─.gitignore
├─.env.example
└─README.md
```

The rest of the files are included as separate artifacts in this folder.
