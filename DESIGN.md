# Wyrd Studios — Design Brief

## Brand Identity

**Studio name:** Wyrd Studios
**Tagline:** *Craft apps. Ship software. Build weird things that matter.*
**Personality:** Mysterious yet technically precise. Handcrafted quality with a darkly arcane edge. Not edgy for its own sake — the aesthetic reflects genuine craft and intentionality.

---

## Visual Identity

### Color Palette

| Role | Value | Usage |
|------|-------|-------|
| Background | `#0d0d12` | Page base — deep void |
| Elevated | `#14141e` | Cards, nav, sections |
| Subtle | `#1c1c2a` | Borders, subtle contrast |
| Text | `#e8e4dc` | Body copy — warm off-white |
| Text muted | `#8a8597` | Secondary, captions |
| **Accent gold** | `#c8a96e` | CTAs, highlights, links |
| Accent light | `#e4c98a` | Hover states |

**Mood:** Like a well-worn leather journal on a dark oak desk — warm golds against deep darkness. Not a Halloween vibe; more like an old apothecary or arcane library.

### Typography

| Role | Font | Fallback |
|------|------|---------|
| Headings | Playfair Display | Georgia, serif |
| Body | Inter | system-ui, sans-serif |
| Code | JetBrains Mono | Fira Code, monospace |

Load via Google Fonts (or self-host via `next/font`).

**Heading style:** Elegant serif — "Wyrd" should feel like a name carved in stone, not printed on a startup deck.

### Scale
- Type scale: Major Third (1.25×)
- Spacing: 8pt grid
- Max content width: 720px
- Max layout width: 1100px

---

## Page Structure

### Home (`/`)
**Purpose:** Anchor the brand, create intrigue, drive to contact.

```
[NAV]     Logo | About | Contact
[HERO]    Headline + subline + CTA button
[APPS]    3-card grid: embyrn / flyaway / sequence-timer
[CONSULT] Brief consulting pitch + CTA
[FOOTER]  Logo | links | privacy
```

**Headline options (choose one):**
1. *"We build apps that feel alive."*
2. *"Weird ideas. Careful craft."*
3. *"Small studio. Focused work."*

### About (`/about`)
**Purpose:** Human story — who is behind Wyrd Studios, what drives the work.

```
[HERO]     Photo (optional) + short bio
[STUDIO]   What Wyrd Studios is and does
[APPS]     App portfolio list with brief descriptions
[CONSULT]  Consulting areas + availability status
```

### Contact (`/contact`)
**Purpose:** Low-friction hire/contact path.

```
[HERO]    "Let's work together"
[FORM]    Name, Email, Message (Formspree or mailto: fallback)
[DIRECT]  Email address visible, no JS required
```

### Privacy Policy (`/privacy`)
**Purpose:** Legal compliance for app store submissions (embyrn, flyaway, sequence-timer).

```
[CONTENT]  Legal-advisor-drafted policy covering:
           - What data is collected (and what isn't)
           - Analytics (if any)
           - Third-party services
           - Contact for data requests
```

---

## Components Needed (Phase 3)

| Component | File | Notes |
|-----------|------|-------|
| Nav | `src/components/Nav.tsx` | Logo + links + mobile hamburger |
| Footer | `src/components/Footer.tsx` | Logo, nav links, privacy link |
| Button | `src/components/Button.tsx` | Primary (gold) + ghost variants |
| AppCard | `src/components/AppCard.tsx` | App name, description, store links |
| Section | `src/components/Section.tsx` | Padded container wrapper |
| HeroSection | `src/components/HeroSection.tsx` | Full-width hero with gradient |

---

## Technical Notes

- **No client components** unless required (forms)
- **Fonts:** Use `next/font/google` for zero layout shift
- **Images:** Use `<Image>` from next/image with `unoptimized: true` (static export)
- **Forms:** Formspree free tier for contact form (no backend needed)
- **Analytics:** Cloudflare Pages built-in analytics (no tracking scripts needed)
