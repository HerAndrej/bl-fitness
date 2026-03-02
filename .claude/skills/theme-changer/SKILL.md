---
name: theme-changer
description: Use when someone asks to change the app colors, theme, palette, branding, or style — for example to make it more masculine, professional, or to rebrand to "BL FITNESS". Also use when asked to rename the application from "b-lila-fitness" or "B-Lila Fitness" to a new name.
disable-model-invocation: false
---

# Theme Changer Skill — BL FITNESS

## Purpose

This skill replaces the existing **purple/fuchsia feminine palette** (centered on `#9333ea`) with a bold, modern **masculine color palette**, and renames every occurrence of the old brand name to **BL FITNESS**.

---

## New Design System

### Brand Identity
- **Old name:** B-Lila Fitness / b-lila-fitness
- **New name:** BL FITNESS

### Color Palette (Steel-Blue + Orange + Charcoal)

| Role | Old value | New value | Notes |
|---|---|---|---|
| Primary (accent) | `#9333ea` (purple-600) | `#f97316` (orange-500) | Energy, power |
| Primary dark | `#7e22ce` (purple-700) | `#ea580c` (orange-600) | Hover/pressed state |
| Primary light | `#a855f7` (purple-500) | `#fb923c` (orange-400) | Highlights |
| Secondary | `#d946ef` (fuchsia-500) | `#0ea5e9` (sky-500) | Cool steel-blue |
| Secondary dark | `#c026d3` (fuchsia-700) | `#0284c7` (sky-600) | |
| Background dark | `#09090b` (zinc-950) | `#0a0f1e` (deep navy-black) | Darker, stronger |
| Surface | `#18181b` (zinc-900) | `#0f172a` (slate-900) | Section backgrounds |
| Surface mid | `#27272a` (zinc-800) | `#1e293b` (slate-800) | Cards/inputs |
| Text primary | white | white | Keep |
| Text muted | `#a1a1aa` (zinc-400) | `#94a3b8` (slate-400) | |
| Border | `#3f3f46` (zinc-700) | `#334155` (slate-700) | |

### CSS section-heading underline
Replace `background: #9333ea` → `background: #f97316`

---

## Files to Read First

Before making any changes, read ALL of these files:

**Core:**
- `src/index.css`
- `index.html`
- `src/App.tsx`
- `src/main.tsx`

**Components (read every one):**
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Services.tsx`
- `src/components/Plans.tsx`
- `src/components/Quiz.tsx`
- `src/components/Results.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/components/Testimonials.tsx`
- `src/components/FAQ.tsx`
- `src/components/WhatsAppFloat.tsx`

**Pages:**
- `src/pages/Home.tsx`

**Locales:**
- `src/locales/sr.ts` (or `sr.json`)
- `src/locales/en.ts` (or `en.json`)

**Config:**
- `package.json`
- `vite.config.ts` (if present)

---

## Steps

### Step 1 — Rename the app brand

Find and replace every occurrence of the old brand name with **BL FITNESS**:

| Find | Replace with |
|---|---|
| `B-Lila Fitness` | `BL FITNESS` |
| `B-lila Fitness` | `BL FITNESS` |
| `b-lila-fitness` (in UI text only, NOT in file paths) | `BL FITNESS` |
| `b-lilafitness.com` references in `<title>` / OG tags | keep URL but update display names |
| `B-Lila` | `BL FITNESS` |

Files most likely to contain the brand name:
- `index.html` → `<title>`, `og:title`, `og:description`, `twitter:title`, `twitter:description`, `meta name="description"`
- `src/components/Navbar.tsx` → logo text
- `src/components/Footer.tsx` → footer brand, copyright
- `src/locales/sr.ts` and `src/locales/en.ts` → any site name strings

### Step 2 — Replace the color palette

Using the table in **New Design System** above, do a systematic find-and-replace across all source files.

#### Tailwind class mappings (the most common ones):

| Old Tailwind class | New Tailwind class |
|---|---|
| `purple-600` | `orange-500` |
| `purple-700` | `orange-600` |
| `purple-800` | `orange-700` |
| `purple-900` | `orange-900` |
| `purple-500` | `orange-400` |
| `purple-400` | `orange-300` |
| `purple-300` | `orange-200` |
| `fuchsia-500` | `sky-500` |
| `fuchsia-600` | `sky-600` |
| `fuchsia-700` | `sky-700` |
| `fuchsia-400` | `sky-400` |
| `fuchsia-300` | `sky-300` |
| `violet-500` | `orange-400` |
| `violet-600` | `orange-500` |
| `violet-700` | `orange-600` |
| `zinc-950` | `slate-950` |
| `zinc-900` | `slate-900` |
| `zinc-800` | `slate-800` |
| `zinc-700` | `slate-700` |
| `zinc-400` | `slate-400` |
| `zinc-300` | `slate-300` |

#### Hex / raw color replacements:

| Old hex | New hex |
|---|---|
| `#9333ea` | `#f97316` |
| `#7e22ce` | `#ea580c` |
| `#a855f7` | `#fb923c` |
| `#d946ef` | `#0ea5e9` |
| `#c026d3` | `#0284c7` |
| `#6b21a8` | `#c2410c` |
| `09090b` or `#09090b` | `#0a0f1e` |
| `18181b` or `#18181b` | `#0f172a` |
| `27272a` or `#27272a` | `#1e293b` |

#### Gradient pairs — update both colors:

| Old gradient | New gradient |
|---|---|
| `from-purple-600 to-fuchsia-500` | `from-orange-500 to-sky-500` |
| `from-purple-700 to-fuchsia-600` | `from-orange-600 to-sky-600` |
| `from-purple-900 to-zinc-900` | `from-slate-900 to-orange-950` |
| `from-zinc-950 to-purple-950` | `from-slate-950 to-orange-950` |
| `from-fuchsia-500 to-purple-600` | `from-sky-500 to-orange-500` |

#### Shadow/glow colors:

| Old | New |
|---|---|
| `shadow-purple-500` | `shadow-orange-500` |
| `shadow-purple-600` | `shadow-orange-600` |
| `shadow-fuchsia-500` | `shadow-sky-500` |

#### Ring colors:

| Old | New |
|---|---|
| `ring-purple-500` | `ring-orange-500` |
| `ring-purple-600` | `ring-orange-600` |
| `ring-purple-400` | `ring-orange-400` |
| `ring-fuchsia-500` | `ring-sky-500` |

#### Text colors:

| Old | New |
|---|---|
| `text-purple-400` | `text-orange-400` |
| `text-purple-500` | `text-orange-500` |
| `text-purple-600` | `text-orange-600` |
| `text-purple-300` | `text-orange-300` |
| `text-fuchsia-500` | `text-sky-400` |
| `text-fuchsia-400` | `text-sky-400` |
| `text-violet-400` | `text-orange-400` |

#### Border colors:

| Old | New |
|---|---|
| `border-purple-500` | `border-orange-500` |
| `border-purple-600` | `border-orange-600` |
| `border-purple-700` | `border-orange-700` |
| `border-fuchsia-500` | `border-sky-500` |
| `border-zinc-700` | `border-slate-700` |
| `border-zinc-800` | `border-slate-800` |

#### Background colors:

| Old | New |
|---|---|
| `bg-purple-600` | `bg-orange-500` |
| `bg-purple-700` | `bg-orange-600` |
| `bg-purple-500` | `bg-orange-400` |
| `bg-purple-900` | `bg-orange-950` |
| `bg-fuchsia-500` | `bg-sky-500` |
| `bg-fuchsia-600` | `bg-sky-600` |
| `bg-zinc-950` | `bg-slate-950` |
| `bg-zinc-900` | `bg-slate-900` |
| `bg-zinc-800` | `bg-slate-800` |
| `bg-zinc-700` | `bg-slate-700` |
| `bg-zinc-400` | `bg-slate-400` |

### Step 3 — Update `index.css`

In `src/index.css`, replace:
```css
background: #9333ea;
```
with:
```css
background: linear-gradient(90deg, #f97316, #0ea5e9);
```

### Step 4 — Update `index.html` theme-color

```html
<!-- Old -->
<meta name="theme-color" content="#9333ea" />

<!-- New -->
<meta name="theme-color" content="#f97316" />
```

### Step 5 — Update `package.json` name field (optional)

If `name` in `package.json` is `b-lila-fitness`, you may change it to `bl-fitness`. This is internal only and does not affect the UI.

### Step 6 — Verify consistency

After making all changes:
1. Search for any remaining `purple`, `fuchsia`, `violet`, `zinc` Tailwind classes and any remaining occurrences of `#9333ea`, `#7e22ce`, `#a855f7`, `#d946ef`.
2. Search for remaining `B-Lila`, `b-lila`, `B-lila Fitness`, `B-Lila Fitness` brand name strings in user-facing text.
3. Report any missed instances to the user.

---

## Masculine Design Notes

When applying the new palette, keep these principles in mind:

- **Orange (#f97316)** = intensity, energy, power — use for primary CTAs, headings, highlights
- **Steel-blue / Sky (#0ea5e9)** = precision, trust, technology — use for secondary accents, links, icons
- **Deep navy-black background** = premium, strong, professional
- **No pink, no lavender, no soft purples** — if you encounter any, replace with the nearest orange or sky equivalent
- The overall feel should resemble brands like **Nike Training, Gymshark Dark, or UFC Gym** rather than a lifestyle wellness brand

---

## After Changes

Tell the user:
- Summary of all files edited
- Any colors or names that could not be automatically replaced (edge cases)
- Recommend running `npm run dev` to preview the new look
