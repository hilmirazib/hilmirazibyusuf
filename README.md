# 📚 Portfolio Blog – Next.js + MDX + Drizzle

Personal portfolio + blog built with **Next.js App Router**, **TypeScript**, **TailwindCSS**, **MDX**, and **Postgres (Neon) + Drizzle ORM**.
Tujuan project ini: menjadi portfolio yang **modern**, **performant**, dan **production-ready**

---

## ✨ Features

* ⚡ **Next.js 15 (App Router)** – modern React framework
* 🎨 **TailwindCSS + Typography** – clean & accessible UI
* 📝 **MDX blog posts** – Markdown + React components
* 📄 **Dynamic metadata & SEO** – Open Graph, Twitter cards, sitemap, RSS feed, robots.txt
* 📊 **Analytics** – Umami (self-host / cloud) + optional Vercel Analytics
* 👀 **View counter per post** – increment setiap kali halaman dibuka
* 💬 **Reactions widget** – like / clap / heart per post
* 🗄️ **Postgres (Neon) + Drizzle ORM** – typed schema, migrations, studio
* 📈 **Materialized View + cron refresh** – fast aggregation for reactions
* 🧩 **Component design methodology** – core (atoms), molecules, organisms, views (templates)
* 🗂️ **Content sources** – MDX (`/content/blog`), JSON (`/data/projects.json`, `/data/uses.json`)

---

## 🏗️ Project Structure

```
src/
  app/
    (site)/
      layout.tsx        # global layout (Navbar, Footer, Analytics)
      page.tsx          # homepage
      blog/
        page.tsx        # blog index
        [slug]/page.tsx # blog detail (with MDX, views, reactions)
      projects/page.tsx # projects list
      uses/page.tsx     # uses / setup page
    api/
      rss/route.ts      # /rss.xml
      sitemap/route.ts  # /sitemap.xml
      robots/route.ts   # /robots.txt
      views/route.ts    # increment views
      reactions/route.ts# add/list reactions
    og/
      image/route.ts    # OG image generator (optional)
  components/
    core/        # atoms (Button, Link, Icon, Badge)
    molecules/   # PostCard, ProjectCard, MDXComponents, ViewCounter, Reactions
    organisms/   # Navbar, Footer, ArticleLayout
    mdx/         # Callout, Table, MdxImage, CodeHighlighter
  content/
    blog/        # .mdx posts
  data/
    projects.json
    uses.json
  lib/
    mdx.ts
    posts.ts
    seo.ts
    db.ts
    schema.ts
  providers/
    theme-provider.tsx
    analytics-provider.tsx
  scripts/
    refresh-mv.js
    package.json
```

---

## ⚙️ Setup & Development

### 1. Clone & install

```bash
git clone https://github.com/your-username/portfolio-blog.git
cd portfolio-blog
npm install
```

### 2. Env variables

Buat file `.env.local`:

```ini
SITE_URL=http://localhost:3000

# Umami (opsional)
NEXT_PUBLIC_UMAMI_WEBSITE_ID=...
NEXT_PUBLIC_UMAMI_SRC=https://cloud.umami.is/script.js

# Postgres (Neon / Docker)
DATABASE_URL=postgres://user:pass@host:5432/db
DATABASE_SSL=true   # untuk Neon; hapus/false kalau pakai Docker lokal
```

### 3. Database migration

```bash
npm run db:generate
npm run db:push
npm run db:studio # optional UI
```

### 4. Dev server

```bash
npm run dev
```

Buka → [http://localhost:3000](http://localhost:3000)

---

## 🐳 Docker (Local Postgres)

`docker-compose.yml` contoh:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:16-alpine
    container_name: my-portfolio-postgres
    environment:
      - POSTGRES_USER=myuser
      - POSTGRES_PASSWORD=mypassword
      - POSTGRES_DB=mydb
    ports:
      - '5432:5432'
    volumes:
      - postgres-data:/var/lib/postgresql/data
    restart: unless-stopped

  # opsional: Adminer UI
  adminer:
    image: adminer
    ports:
      - '8080:8080'

  # opsional: refresher MV
  refresher:
    image: bitnami/crontab:latest
    depends_on: [postgres]
    volumes:
      - ./scripts:/app/scripts
    environment:
      - DATABASE_URL=postgres://myuser:mypassword@postgres:5432/mydb
    command: >
      bash -c "echo '* * * * * node /app/scripts/refresh-mv.js >> /proc/1/fd/1 2>&1' | crontab - && crond -f"

volumes:
  postgres-data:
```

---

## ✅ Checklist

* [x] Scaffold + folder structure
* [x] MDX blog posts
* [x] SEO (RSS, sitemap, robots)
* [x] Content (projects, uses)
* [x] Layout (Navbar, Footer)
* [x] MDX UX (typography, callout, code highlight)
* [x] Analytics (Umami)
* [x] Views + Reactions (Drizzle + Postgres)
* [x] Materialized View + cron refresh
* [ ] OG image generator (optional)
* [ ] Deploy to Vercel + Neon

---

## 🚀 Deployment

* Frontend → **Vercel** (`npm run build && npm run start`)
* DB → **Neon Postgres** (or Docker self-host)
* Analytics → **Umami Cloud** / self-host

---

