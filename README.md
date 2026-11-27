# TAMXXI

Astro rebuild of the TAMXXI portfolio, published on GitHub Pages and Cloudflare Pages:

- Cloudflare Pages: <https://tamxxi.pages.dev/>
- GitHub Pages: <https://yiranzai.github.io/tamxxi/>

## Stack

- Astro 5, static output
- React 18 islands for the home scene and the shop dialog
- Astro content collections for the journal
- Local assets, Inter bundled with Fontsource
- GitHub Actions to GitHub Pages

## Routes

| Route | Page |
|---|---|
| `/` | Interactive desk scene |
| `/works/` | Categorised works index |
| `/flow/` | Full visual feed |
| `/journal/` | Journal index |
| `/journal/about/` | Placeholder personal introduction |
| `/shop/` | Shop |
| `/02日历/` | Calendar product |
| `/Art-fairs/` | Art fairs |
| `/Art-fairs/上海/` | Shanghai booth |
| `/01蜷缩雕刻/` | Curled sculpture |
| `/01-fading/` | Fading |
| `/02-cryface/` | Cryface |
| `/03-burning/` | Burning |
| `/04头像雕刻/` | Heads |
| `/03自画像雕刻/` | Self portrait |
| `/zi-ne/` | Sorrow Set zine |
| `/old-home/` | Legacy home |

## Categories

Works are grouped by medium in `src/data/works.ts`:

- 绘画 `painting`
- 雕塑 `sculpture`
- 出版物 `print`
- 影像 `video`

Each work also carries motif tags such as 身体, 情绪, 自画像, 记忆, 动物.

Journal entries use Astro content collections. Front matter:

```yaml
title: "..."
description: "..."
date: 2026-11-27
category: about
tags: ["插画", "雕塑"]
cover: "file-in-public-assets.jpg"
coverAlt: "..."
```

Journal categories: `about`, `notes`, `process`, `exhibition`.

## Run

```bash
npm install
npm run dev
```

Build and preview a project-path build:

```bash
BASE_PATH=/tamxxi/ SITE_URL=https://yiranzai.github.io npm run build
BASE_PATH=/tamxxi/ SITE_URL=https://yiranzai.github.io npm run preview
```

## Deploy

The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

- For a project site, `BASE_PATH` is set to `/<repo>/` automatically.
- For a `<user>.github.io` repo, `BASE_PATH` is `/`.
- In GitHub: Settings > Pages > Source: GitHub Actions.

### Cloudflare Pages

Cloudflare Pages serves the site at the domain root, so build without the `/tamxxi/` base:

```bash
BASE_PATH=/ SITE_URL=https://tamxxi.pages.dev npm run build
npx wrangler pages deploy dist --project-name tamxxi
```

For automatic deploys, connect the GitHub repository in the Cloudflare Pages dashboard with build command `npm run build`, output directory `dist`, and environment variables `BASE_PATH=/` and `SITE_URL=https://tamxxi.pages.dev`.

The placeholder introduction lives at `src/content/journal/about.md` and can be replaced without touching the layout.
