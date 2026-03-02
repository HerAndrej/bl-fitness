---
name: design-audit
description: Use when someone asks to audit the site design, recommend improvements, review what to add or change to make the site better, analyze the UI/UX, or improve the look and feel of the b-lila-fitness application.
disable-model-invocation: false
---

# Design Audit Skill — b-lila-fitness

## What This Skill Does

Performs a full design and UX audit of the **b-lila-fitness** React/Vite/TailwindCSS application.
It reads every relevant source file, evaluates the current state against modern fitness-industry web standards, and then produces a prioritized, actionable report with:

- Visual/design strengths to preserve
- Concrete design improvements (colors, typography, spacing, animations)
- Missing features or sections that high-performing fitness sites include
- Code-level suggestions (component refactors, accessibility, performance)

---

## Steps

### 1. Read the application source

Read **every** file listed below before drawing any conclusions:

**Core files:**
- `src/index.css`
- `src/App.tsx`
- `src/main.tsx`
- `src/LanguageContext.tsx`
- `index.html`

**Pages:**
- `src/pages/Home.tsx`

**Components (read all of them):**
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Services.tsx`
- `src/components/Plans.tsx`
- `src/components/Quiz.tsx`
- `src/components/Results.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

**Translations (sample both locales):**
- `src/locales/` — read the files inside (usually `sr.ts` or `en.ts`)

**Config:**
- `package.json`
- `vite.config.ts`

### 2. Evaluate each section

For each component / section, assess the following dimensions. Score each 1–10 in your internal analysis (do NOT show raw scores in the report):

| Dimension | What to look for |
|---|---|
| **Visual hierarchy** | Is the most important content the most prominent? |
| **Color consistency** | Is the purple/fuchsia palette applied systematically? Any rogue colors? |
| **Typography** | Font sizes, weights, line-heights — do they create a clear scale? |
| **Spacing & rhythm** | Consistent padding/margin? Breathing room between sections? |
| **Motion & animation** | Are Framer Motion / `motion` animations purposeful, not excessive? |
| **Mobile responsiveness** | Are breakpoints (`sm:`, `md:`, `lg:`) used everywhere they're needed? |
| **Accessibility** | Alt texts, ARIA labels, focus states, color contrast (WCAG AA)? |
| **Conversion focus** | Clear CTAs, urgency elements, social proof, trust signals? |
| **Performance** | Large images, layout shifts, too many re-renders, missing lazy loading? |
| **Content completeness** | Does the section answer the visitor's key questions? |

### 3. Benchmark against modern fitness sites

Think about what world-class fitness/wellness sites include (e.g. Nike, Gymshark, FitOn, Barry's). Note what gaps exist:

- Transformation gallery / before-after section
- Testimonials / reviews with photos and ratings
- Trainer/coach bios with photos
- Live class schedule or booking widget
- Blog / content marketing section
- Newsletter sign-up with lead magnet
- Social proof counters (members, workouts done)
- FAQ / objection-handling section
- Sticky floating CTA bar
- Progress / trust badges ("100+ 5★ reviews", "500+ clients")
- Video background hero or embedded workout preview
- Dark/light mode toggle

### 4. Generate the audit report

Write the full report to `design-audit-report.md` in the project root (`c:\Users\User\Desktop\Aplikacije1\b-lila-fitness\design-audit-report.md`).

Use the output format defined in the **Output Format** section below.

### 5. Summarize findings to the user

After writing the file, give the user a short (5–8 bullet) executive summary of the top findings directly in chat, and tell them the full report is at `design-audit-report.md`.

---

## Output Format

The report file must follow this exact structure:

```markdown
# 🏋️ b-lila-fitness — Design Audit Report
_Generated: [date]_

---

## Executive Summary

[2–3 sentences: overall impression, biggest strengths, biggest opportunity]

---

## ✅ What's Working Well

- [Specific strength with file/component reference]
- ...

---

## 🎨 Design & Visual Improvements

### [Section Name] — e.g. Hero
**Current:** [describe what's there now]
**Problem:** [what's weak or missing]
**Recommendation:** [specific, actionable fix — include Tailwind class names, color hex codes, or code snippets where helpful]
**Priority:** 🔴 High / 🟡 Medium / 🟢 Low

[Repeat for each section that has issues]

---

## 🚀 Missing Features to Add

| Feature | Why It Matters | Suggested Placement | Priority |
|---|---|---|---|
| Testimonials section | Social proof increases conversion by ~18% | After Plans | 🔴 High |
| ... | ... | ... | ... |

---

## ♿ Accessibility Fixes

- [Issue]: [Component] — [Fix]
- ...

---

## ⚡ Performance Improvements

- [Issue] — [Fix]
- ...

---

## 📐 Code Quality Suggestions

- [Suggestion with file reference]
- ...

---

## 🗺️ Recommended Implementation Order

1. [Highest impact, lowest effort first]
2. ...

---

## Component-by-Component Scorecard

| Component | Visual | Responsiveness | Conversion | Accessibility | Overall |
|---|---|---|---|---|---|
| Hero | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | **Good** |
| ... | | | | | |

_Scale: ⭐ Poor → ⭐⭐⭐⭐⭐ Excellent_
```

---

## Notes

- **Be specific**: Instead of "improve colors", say "change the CTA button from `bg-purple-600` to `bg-gradient-to-r from-purple-600 to-fuchsia-500` with a `shadow-purple-500/40 shadow-lg` glow effect."
- **Preserve the brand**: The purple/fuchsia palette and dark theme are core to the brand — recommendations should enhance, not replace them.
- **Include code snippets**: For the top 3 recommendations, include a before/after Tailwind JSX snippet.
- **Don't audit what you haven't read**: Read ALL listed files before writing a single word of the report.
- **Language note**: The site supports Serbian (`sr`) and English (`en`). Recommendations should apply to both locales.
- **This skill does NOT apply changes** — it only audits and recommends. If the user wants changes applied, they should ask a separate follow-up.
