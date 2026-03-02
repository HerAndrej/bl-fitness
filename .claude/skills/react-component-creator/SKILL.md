---
name: react-component-creator
description: Use when someone asks to create a new React component, build a new section, add a new component file, scaffold Testimonials, FAQ, WhatsAppFloat, StickyBar, or any other new TSX component for the b-lila-fitness application.
argument-hint: "[ComponentName] — e.g. Testimonials, FAQ, WhatsAppFloat, StickyBar"
---

# React Component Creator Skill — b-lila-fitness

## What This Skill Does

Creates new, production-ready React/TypeScript (`.tsx`) components for the **b-lila-fitness** application following the project's established patterns:

- Purple/fuchsia brand palette with dark backgrounds
- **Framer Motion** (`motion/react`) scroll-triggered animations
- **TailwindCSS v4** utility classes
- **Lucide React** icons
- `useLanguage()` hook for bilingual (SR/EN) content
- Consistent section structure and spacing

After creating the component file, this skill also tells you what to add to `Home.tsx` to render it.

---

## Steps

### 1. Read project conventions

Before writing any code, read the following files to understand current patterns:

- `src/components/About.tsx` — reference for two-column layout pattern
- `src/components/Plans.tsx` — reference for dark-section, card grid pattern
- `src/components/Quiz.tsx` — reference for interactive component pattern
- `src/index.css` — any global utility classes
- `CLAUDE.md` — brand rules and stack

### 2. Determine component type

Based on `$ARGUMENTS` (component name), classify the component:

| Name contains | Type | Background | Layout |
|---|---|---|---|
| Testimonials | Social proof | `bg-gray-900` dark | Card grid (3 cols) |
| FAQ | Accordion | `bg-gray-950` dark | Single column, max-w-3xl |
| WhatsAppFloat | Floating button | Fixed position overlay | Single button |
| StickyBar | Mobile CTA | Fixed bottom bar | Full-width mobile strip |
| *Custom* | Use description | Ask or infer | Infer from name |

### 3. Write the component

Create the file at `src/components/$ARGUMENTS.tsx`.

Follow this exact structure:

```tsx
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
// import relevant Lucide icons

export default function $ARGUMENTS() {
  const { t } = useLanguage();

  return (
    <section id="[section-id]" className="py-20 md:py-32 [bg-class]">
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold [color] mb-4 section-heading uppercase">
            <span>{t.[key].title1} </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500">
              {t.[key].title2}
            </span>
          </h2>
          <p className="text-lg [sub-color]">{t.[key].sub}</p>
        </div>

        {/* Component content */}
        ...
      </div>
    </section>
  );
}
```

**Animation rules**:
- Use `motion.div` with `initial={{ opacity: 0, y: 30 }}` + `whileInView={{ opacity: 1, y: 0 }}` + `viewport={{ once: true }}` for section-level elements
- Stagger card animations: `transition={{ duration: 0.6, delay: index * 0.2 }}`
- For floating buttons: `animate={{ scale: [1, 1.05, 1] }}` with `repeat: Infinity`

**Brand rules** (from CLAUDE.md):
- Dark sections: `bg-gray-900` or `bg-gray-950`
- Light sections: `bg-white` or `bg-gray-50`
- Primary gradient: `from-purple-600 to-fuchsia-500`
- Glow shadow: `shadow-[0_0_30px_rgba(147,51,234,0.4)]`
- Font: Inter (already loaded via theme)
- Icons: Lucide React only

### 4. Component-specific patterns

#### Testimonials
```tsx
// Dark section, card grid with star ratings
const testimonials = [
  { name: t.testimonials.c1Name, quote: t.testimonials.c1Quote, plan: t.testimonials.c1Plan, rating: 5 }
  // ... more
];
// Each card: bg-gray-800 border border-gray-700 rounded-2xl p-6
// Stars: Array(rating).fill('★').join('') in text-fuchsia-400
// Client avatar: initials circle bg-gradient-to-br from-purple-600 to-fuchsia-500
```

#### FAQ
```tsx
// Dark section, accordion expandable items
const [openIndex, setOpenIndex] = useState<number | null>(null);
// Each item: question header (click to toggle) + AnimatePresence for answer reveal
// Border separators: border-b border-gray-700 on each item
```

#### WhatsAppFloat
```tsx
// Fixed position, no section wrapper needed
// className="fixed bottom-6 right-6 z-50"
// Green button: bg-green-500 hover:bg-green-600
// Pulse: animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2 }}
// Link: href="https://wa.me/971588258315?text=..."
// Icon: MessageCircle from lucide-react
```

#### StickyBar
```tsx
// Mobile-only, hidden on md+
// className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
// Background: bg-gray-900 border-t border-purple-600 p-4
// Use IntersectionObserver to hide when #contact section is visible
```

### 5. Tell user what to add to Home.tsx

After writing the component file, output this instruction block:

```
📌 Add to src/pages/Home.tsx:

import [ComponentName] from '../components/[ComponentName]';

And add <[ComponentName] /> between [Section A] and [Section B].
```

### 6. Tell user which locale keys to add

List all `t.[key].xxx` references used so the user can run `/i18n-content-adder` next.

---

## Notes

- **Always read at least one existing component before writing** — never guess conventions.
- **Never hardcode visible strings** — all user-facing text must use `t.[key]` translations.
- **Floating/fixed components** (WhatsAppFloat, StickyBar) do NOT have a `<section>` wrapper.
- **Dark section text colors**: heading `text-white`, body `text-gray-300`, muted `text-gray-400`.
- **Light section text colors**: heading `text-gray-900`, body `text-gray-600`.
- **This skill writes the component only** — locale keys are added by `/i18n-content-adder`, Home.tsx import is done manually or by `/change-planner` task.
