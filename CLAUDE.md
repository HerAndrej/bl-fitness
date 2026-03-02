# b-lila-fitness — Claude Project Instructions

## Project Overview

This is a **React + Vite + TailwindCSS v4** fitness website for "B-Lila Fitness".
It is a single-page application with bilingual support (Serbian / English).

**Tech stack:** React 19, TypeScript, TailwindCSS v4, Framer Motion (`motion`), React Router v7, Lucide React icons.

**Brand:** Purple/fuchsia color palette (`purple-600`, `fuchsia-500`), dark backgrounds (`gray-900`), bold sans-serif typography (Inter).

---

## Available Skills

### `/design-audit`
**Trigger phrases:** "audit the design", "what should I improve", "review the site", "recommend changes", "make the site better", "UI/UX review"
**What it does:** Reads every component and produces a prioritized design + feature recommendation report.
**Output:** `design-audit-report.md` in the project root + executive summary in chat.

### `/change-planner`
**Trigger phrases:** "create a plan", "plan the changes", "implementation plan", "plan the improvements", "turn the audit into a plan", "what do I build first", "plan what to change"
**What it does:** Reads an audit report (or user description), checks which skills exist, creates missing skills via `skill-builder` if needed, then outputs a full task-by-task implementation plan.
**Output:** `change-plan.md` in the project root + executive summary in chat.

### `/skill-builder`
**Trigger phrases:** "create a new skill", "build a skill", "add a skill", "audit this skill", "optimize this skill"
**What it does:** Guides creation or optimization of `.claude/skills/` skills using a discovery interview + structured build phase.
**Output:** New or updated `SKILL.md` (and optional supporting files) inside `.claude/skills/[name]/`.

### `/react-component-creator`
**Trigger phrases:** "napravi komponentu", "kreiraj komponentu", "create a new component", "build a new section", "scaffold Testimonials/FAQ/WhatsAppFloat/StickyBar"
**What it does:** Creates new production-ready React/TSX components with Framer Motion animations, Tailwind v4 styling, Lucide icons and `useLanguage()` hook. Reads existing components first to match patterns.
**Output:** New file `src/components/[Name].tsx` + instructions for Home.tsx import.

### `/tailwind-design-implementer`
**Trigger phrases:** "promeni boje", "dark tema", "tamna sekcija", "dodaj gradijent", "glow efekat", "change colors", "dark section", "apply dark theme", "add gradient", "fix hover"
**What it does:** Applies surgical visual/styling changes to existing components — dark section conversions, gradient CTAs, glow shadows, hover reveals — always consistent with purple/fuchsia brand.
**Output:** Directly modifies the target component file. Reports changed lines.

### `/i18n-content-adder`
**Trigger phrases:** "dodaj prevode", "dodaj locale", "dodaj srpski prevod", "add translations", "add locale keys", "add bilingual content"
**What it does:** Adds new locale keys to BOTH `src/locales/en.ts` AND `src/locales/sr.ts` simultaneously. Enforces bilingual invariant — never updates one file without the other.
**Output:** Updates both locale files. Reports all added keys.

### `/seo-html-optimizer`
**Trigger phrases:** "dodaj meta tagove", "SEO optimizacija", "dodaj OG tagove", "Inter font", "add meta tags", "fix SEO", "add Open Graph", "load font"
**What it does:** Adds and optimizes `<head>` content in `index.html`: SEO meta tags, Open Graph tags, Twitter Card, Google Fonts Inter link, favicon links, DNS prefetch.
**Output:** Modifies `index.html`. Warns about any missing asset files (og-image, favicon).

### `/accessibility-fixer`
**Trigger phrases:** "popravi pristupačnost", "dodaj ARIA", "aria-expanded", "role alert", "fix accessibility", "add aria labels", "WCAG", "screen reader"
**What it does:** Adds ARIA labels, `aria-expanded`, `role="alert"`, `aria-label` on buttons/images/forms. Targets WCAG 2.1 AA. Operates on a specific component or all components.
**Output:** Generates an accessibility report, then directly applies fixes to the target component(s).

---

## Source Structure

```
src/
├── App.tsx                  — Router setup
├── main.tsx                 — Entry point
├── index.css                — Global styles + TailwindCSS theme
├── LanguageContext.tsx      — i18n provider (SR/EN)
├── locales/                 — Translation files
├── pages/
│   └── Home.tsx             — Main page composition
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Services.tsx
    ├── Plans.tsx
    ├── Quiz.tsx
    ├── Results.tsx
    ├── Contact.tsx
    └── Footer.tsx
```
