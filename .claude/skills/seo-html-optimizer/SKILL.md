---
name: seo-html-optimizer
description: Use when someone asks to add meta tags, add Open Graph tags, add SEO tags, fix the HTML head, add font links, load Inter font, add favicon, optimize for search engines, or make any changes to index.html for the b-lila-fitness application.
---

# SEO HTML Optimizer Skill — b-lila-fitness

## What This Skill Does

Adds and optimizes `<head>` content in `index.html` for the b-lila-fitness application:

- **SEO**: `meta[name=description]`, `meta[name=robots]`, canonical URL
- **Open Graph**: social sharing preview (WhatsApp, Instagram, Facebook)
- **Fonts**: Google Fonts Inter preconnect and stylesheet link
- **Favicon**: links to brand favicon
- **Performance**: DNS prefetch for external domains (Unsplash, Formspree)

---

## Steps

### 1. Read index.html

Read the full content of `index.html` at the project root to understand what's already present. **Never add a tag that already exists** — check before inserting.

### 2. Read brand context

Read `CLAUDE.md` to extract:
- Business name, location, target audience
- Brand colors (for `theme-color` meta)
- Any existing description text

### 3. Compose the SEO content

Based on the project context, compose the following values:

```
title: "B-Lila Fitness — Personal Coaching Dubai & Online"
description: "Online personal coaching for busy professionals and cabin crew. Weight loss, muscle gain, nutrition and mindset coaching. Dubai & worldwide."
og:title: "B-Lila Fitness — Transform Your Body & Mind"
og:description: "Certified online coaching tailored for your busy lifestyle. Custom workout, nutrition & mindset plans."
og:image: "/og-image.jpg"  (placeholder path — user must create actual image)
theme-color: "#9333ea"  (purple-600 brand color)
canonical: "https://b-lilafitness.com"
```

> **Note:** If the user has provided specific copy via `$ARGUMENTS`, use their copy verbatim for the description.

### 4. Build the optimized `<head>` block

Insert all of the following (skip any that already exist):

```html
<!-- Charset & Viewport (may already exist) -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- Primary SEO -->
<title>B-Lila Fitness — Personal Coaching Dubai & Online</title>
<meta name="description" content="Online personal coaching for busy professionals and cabin crew. Weight loss, muscle gain, nutrition and mindset coaching. Dubai & worldwide." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://b-lilafitness.com" />

<!-- Theme Color (browser UI on mobile) -->
<meta name="theme-color" content="#9333ea" />

<!-- Open Graph (WhatsApp, Facebook, Instagram link previews) -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://b-lilafitness.com" />
<meta property="og:title" content="B-Lila Fitness — Transform Your Body & Mind" />
<meta property="og:description" content="Certified online coaching tailored for your busy lifestyle. Custom workout, nutrition & mindset plans." />
<meta property="og:image" content="/og-image.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="B-Lila Fitness — Personal Coaching" />
<meta name="twitter:description" content="Online coaching for busy professionals. Dubai & worldwide." />
<meta name="twitter:image" content="/og-image.jpg" />

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" href="/favicon.png" />

<!-- DNS Prefetch for performance -->
<link rel="dns-prefetch" href="https://images.unsplash.com" />
<link rel="dns-prefetch" href="https://formspree.io" />

<!-- Google Fonts: Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet" />
```

### 5. Apply changes to index.html

Modify `index.html` directly. Place all `<meta>` tags inside `<head>`, in this order:
1. Charset + viewport (already there — don't duplicate)
2. `<title>`
3. SEO meta tags
4. Open Graph tags
5. Twitter tags  
6. Favicon links
7. DNS prefetch
8. Font links (preconnect first, then stylesheet)

### 6. Warn about missing assets

After editing, output a warning for any assets that need to be created physically:

```
⚠️ ACTION REQUIRED — Create these files in the project public/ folder:
- public/og-image.jpg  (1200×630px, brand preview image for social sharing)
- public/favicon.svg   (brand icon, recommend purple "B" on dark bg)
- public/favicon.png   (32×32px PNG fallback)

Without these files, meta tags will reference broken image URLs.
```

### 7. Report changes

```
✅ index.html updated:
- Added Inter font (preconnect + stylesheet) — fixes typography bug
- Added SEO meta description
- Added Open Graph tags (og:title, og:description, og:image)
- Added Twitter Card tags
- Added favicon links
- Added dns-prefetch for Unsplash and Formspree

⚠️ 3 asset files need to be created (see above)
```

---

## Notes

- **Check before inserting** — `meta[charset]` and `meta[viewport]` are usually already in `index.html`. Duplicating them breaks the page.
- **`<title>` tag**: update in place, don't add a second one.
- **`og:image` must be absolute URL** in production. The `/og-image.jpg` path works locally but the canonical domain must be set correctly before go-live.
- **Inter font is critical** — without the Google Fonts link, the `--font-sans: "Inter"` CSS variable falls back to the system font, breaking the brand typography silently.
- **This skill does NOT create image assets** — user must provide `og-image.jpg` and `favicon.svg` manually.
