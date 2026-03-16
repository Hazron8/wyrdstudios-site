# Wyrd Studios Site

Marketing site for Wyrd Studios — app studio and software consulting.

Built with Next.js 15 (static export), deployed on Cloudflare Pages.

## Pages

- `/` — Home / Hero
- `/about` — About Wyrd Studios
- `/contact` — Contact / Hire Me
- `/privacy` — Privacy Policy

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
# Static output goes to ./out/
```

## Deployment (Cloudflare Pages)

1. Go to [Cloudflare Pages dashboard](https://dash.cloudflare.com) → Pages → Create a project
2. Connect to GitHub → select `Hazron8/wyrdstudios-site`
3. Build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: `20`
4. Save and deploy

The `.cloudflare/pages.toml` file already encodes these settings.
