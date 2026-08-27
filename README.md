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

## Kya fix hua (Aug 2026)

- **Booking form submit nahi ho raha tha** — frontend sirf ek exact Railway URL trust
  karta tha; agar `VITE_BACKEND_URL` kuch aur hoti (Render, custom domain, koi bhi
  aur host) toh silently ek purani/dead fallback URL par gir jaata tha aur request
  fail ho jaati thi. Ab jo bhi `VITE_BACKEND_URL` build ke time set karo, wahi
  trust hoti hai — koi hardcoded allow-list nahi. Agar ab bhi fail ho toh browser
  DevTools → Console mein exact error dikhega.
- **CORS** ab `*.vercel.app`, `santoshshastri.site` / `www.santoshshastri.site`
  (domain abhi live na ho tab bhi), localhost, aur `FRONTEND_URL`/`FRONTEND_URLS`
  mein diye extra origins — sab allow karta hai.
- **Naya booking aane par ab automatically**:
  - Santosh ji ko ek email jaati hai (`ADMIN_NOTIFY_EMAIL`) booking details ke saath.
  - Agar `ADMIN_WHATSAPP_APIKEY` + `ADMIN_WHATSAPP_PHONE` set ho, toh unke WhatsApp
    par bhi automatically message jaata hai (CallMeBot — free, setup neeche).
  - Customer ko jo confirmation email + Jitsi video-call link jaata hai, woh pehle
    se hi kaam kar raha tha, waisa hi hai.
- **`/admin` page** ab ek real dashboard hai (pehle khaali placeholder tha) — login
  karke aaj/saare bookings dekh sakte ho, har booking ka WhatsApp aur video-call
  link ek click mein.

## Abhi ye steps khud karne honge (in sab ke liye account access chahiye, main nahi kar sakta)

### 1. WhatsApp auto-notify on karna (CallMeBot, free)
1. Santosh ji apne phone se **+34 644 51 90 78** ko WhatsApp par save karein.
2. Usi number par WhatsApp karein: `I allow callmebot to send me messages`
3. Reply mein ek **apikey** milegi.
4. Backend host (Railway/Render) ke environment variables mein daalo:
   - `ADMIN_WHATSAPP_APIKEY` = wahi apikey
   - `ADMIN_WHATSAPP_PHONE` = unka WhatsApp number, country code ke saath, bina `+`/space (jaise `919323152991`)
5. Redeploy karo — agli booking se WhatsApp aana shuru ho jayega.

(Agar aage business-scale par jaana ho — bulk messages, templates, multiple staff —
toh official Twilio WhatsApp Business API better rahega, lekin woh paid hai aur
Meta approval mein kuch din lagte hain.)

### 2. GitHub par naya repo
Apne machine par, project folder mein:
```
cd D:\SantoshShastriWebsite
git init
git add .
git commit -m "Santosh Shastri website"
```
Phir GitHub par ek naya empty repo banao (github.com/new), aur:
```
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

### 3. Backend deploy (Railway ya Render — dono ke config already hain)
Backend live hona chahiye taaki booking form submit ho — ye sabse zaroori step hai.
- **Railway**: naya project → GitHub repo connect → root directory `backend` set
  karo → environment variables daalo (`SMTP_USER`, `SMTP_PASS`, `ADMIN_USERNAME`,
  `ADMIN_PASSWORD`, `ADMIN_NOTIFY_EMAIL`, `ADMIN_WHATSAPP_APIKEY`,
  `ADMIN_WHATSAPP_PHONE`, `FRONTEND_URLS`) → deploy. URL milegi jaise
  `https://<something>.up.railway.app`.
- **Render**: repo se `render.yaml` auto-detect ho jayega (Blueprint) → dashboard
  mein `SMTP_USER`, `SMTP_PASS`, `ADMIN_USERNAME`, `ADMIN_PASSWORD` waghera fill
  karo (jo `sync: false` hain unhe manually dalna padega).

Jo bhi URL mile, use `/health` par khol ke check karo — `{"status":"ok"}` aana
chahiye. Agar wahi nahi khulta, form kabhi submit nahi hoga.

### 4. Frontend deploy (Vercel — vercel.json already hai)
Vercel par project import karo (GitHub repo se), aur project settings →
Environment Variables mein:
- `VITE_BACKEND_URL` = step 3 wali backend URL (poora `https://...` link)

Redeploy karo (env var change hone ke baad Vercel khud redeploy nahi karta,
manually "Redeploy" dabana padta hai).

### 5. DNS (jab domain khareed lo)
`santoshshastri.site` khareedne ke baad, registrar ke DNS settings mein:
- Vercel project → Settings → Domains mein `santoshshastri.site` add karo — Vercel
  khud bata dega ki A/CNAME record kya daalna hai (usually `A @ 76.76.21.21` aur
  `CNAME www cname.vercel-dns.com`, but exact value Vercel apni screen par dikhayega).
- Backend ke liye alag subdomain chahiye ho (jaise `api.santoshshastri.site`) toh
  Railway/Render mein bhi custom domain add karke waisा hi CNAME record daalna hoga.

CORS backend mein already `santoshshastri.site` allow kar raha hai, toh domain
live hote hi kuch aur code change nahi karna padega.

### 6. Live video-call
Video call already Jitsi Meet se ho raha hai (free, no account needed) — har
booking ke liye ek unique link customer ko email mein jaata hai, aur admin
dashboard (`/admin`) mein bhi wahi link "🎥 Join" button se milta hai. Santosh ji
aur customer dono usi link par click karke same room mein video call par mil
sakte hain, kisi extra setup ki zaroorat nahi.
