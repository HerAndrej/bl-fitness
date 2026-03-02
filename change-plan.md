# 🗺️ b-lila-fitness — Change Implementation Plan
_Generated: 2026-03-02_
_Source: design-audit-report.md_

---

## Skill Inventory

| Skill | Status | Notes |
|---|---|---|
| `design-audit` | ✅ Exists | Used to generate the audit report — job done |
| `change-planner` | ✅ Exists | This skill — producing this plan |
| `skill-builder` | ✅ Exists | Available for creating new skills |
| `component-creator` | ❌ Not needed | Simple new components covered by direct implementation |
| `seo-optimizer` | ❌ Not needed | SEO changes are simple HTML edits, no dedicated skill required |
| `accessibility-auditor` | ❌ Not needed | Fixes are targeted and inline; no dedicated skill required |

> **Conclusion:** All skills required to execute this plan already exist. No new skills need to be created before proceeding.

---

## Task List

### 🔴 High Priority

#### T-001 — Fix Inter Font Loading (Silent Bug)
- **Type:** config
- **Files:** `index.html`
- **Skill:** Manual edit
- **Acceptance criteria:**
  - [ ] `<link>` to Google Fonts Inter (weights 400–900) added to `<head>` in `index.html`
  - [ ] `display=swap` parameter included
  - [ ] Site uses Inter visually in dev browser (verify in DevTools → Computed → font-family)
- **Complexity:** Simple
- **Dependencies:** None

---

#### T-002 — Add SEO Meta Tags
- **Type:** config
- **Files:** `index.html`
- **Skill:** Manual edit
- **Acceptance criteria:**
  - [ ] `meta[name=description]` added with coaching-focused copy (EN + accessible copy)
  - [ ] Open Graph `og:title`, `og:description`, `og:image` tags added
  - [ ] `<html lang="en">` is present (already is — confirm stays)
- **Complexity:** Simple
- **Dependencies:** T-001 (do in same file edit pass)

---

#### T-003 — Fix Navbar Scrolled Background (Brand Break)
- **Type:** design
- **Files:** `src/components/Navbar.tsx`
- **Skill:** Manual edit
- **Acceptance criteria:**
  - [ ] Scrolled state uses `bg-gray-900/95 backdrop-blur-xl` instead of `bg-white/90`
  - [ ] Nav links updated to `text-gray-200 hover:text-fuchsia-400` when scrolled
  - [ ] Logo gradient still visible against dark background
  - [ ] "Strategy Call" button updated to purple gradient
- **Complexity:** Simple
- **Dependencies:** None

---

#### T-004 — Enhance Hero Section
- **Type:** design + content
- **Files:** `src/components/Hero.tsx`, `src/locales/en.ts`, `src/locales/sr.ts`
- **Skill:** Manual edit
- **Acceptance criteria:**
  - [ ] Sub-headline added below main title (bilingual: describing audience & geography)
  - [ ] Social proof line added: "500+ clients · ⭐⭐⭐⭐⭐ Dubai's Top Rated"
  - [ ] CTA button changed to purple-to-fuchsia gradient with glow shadow
  - [ ] Scroll indicator chevron added at bottom of Hero section
  - [ ] Both `en.ts` and `sr.ts` updated with `hero.sub` and `hero.proof` keys
- **Complexity:** Medium
- **Dependencies:** None

---

#### T-005 — Add Trust Stats to About Section
- **Type:** design + content
- **Files:** `src/components/About.tsx`, `src/locales/en.ts`, `src/locales/sr.ts`
- **Skill:** Manual edit
- **Acceptance criteria:**
  - [ ] Three-stat row added below text paragraphs: Clients Coached, Avg Rating, Years Experience
  - [ ] Stats styled with `bg-purple-50 border-purple-100 rounded-xl` cards
  - [ ] Locale keys added for stat labels in both EN and SR
- **Complexity:** Simple
- **Dependencies:** None

---

#### T-006 — Add Testimonials Section (New Component)
- **Type:** component + content
- **Files:** `src/components/Testimonials.tsx` **(NEW)**, `src/pages/Home.tsx`, `src/locales/en.ts`, `src/locales/sr.ts`
- **Skill:** Manual implementation
- **Acceptance criteria:**
  - [ ] New `Testimonials.tsx` component created with 3–5 testimonial cards
  - [ ] Each card has: client photo (or initials avatar), name, rating (★), quote, plan used
  - [ ] Section placed between Results and Contact in `Home.tsx`
  - [ ] Section uses `id="testimonials"` and dark background (`bg-gray-900`) for contrast
  - [ ] Framer Motion `whileInView` animation applied
  - [ ] Bilingual locale keys added
- **Complexity:** Medium
- **Dependencies:** None

---

#### T-007 — Fix Real vs. Stock Photos in Results
- **Type:** content
- **Files:** `src/components/Results.tsx`, `src/locales/en.ts`, `src/locales/sr.ts`
- **Skill:** Manual edit + user action (provide real photos)
- **Acceptance criteria:**
  - [ ] Stock Unsplash before/after images replaced with real client transformation photos
  - [ ] Each slide has a caption: client first name, program duration, plan name
  - [ ] Caption locale keys added to both EN and SR
  - [ ] *(If real photos not yet available: add placeholder comment and extract data to `src/data/transformations.ts`)*
- **Complexity:** Simple
- **Dependencies:** None (requires user to provide real photos)

---

### 🟡 Medium Priority

#### T-008 — Add Dark Section Rhythm (Plans + Quiz)
- **Type:** design
- **Files:** `src/components/Plans.tsx`, `src/components/Quiz.tsx`
- **Skill:** Manual edit
- **Acceptance criteria:**
  - [ ] Plans section background changed from `bg-white` to `bg-gray-900`
  - [ ] Plans section text colors updated: heading to white, body to `text-gray-300`
  - [ ] Non-featured plan cards updated to dark-themed borders (`border-gray-700`)
  - [ ] Quiz section background changed from `bg-white` to `bg-gray-950`
  - [ ] Quiz card (`bg-gray-50`) internals themed for dark: `bg-gray-800 border-gray-700`
- **Complexity:** Medium
- **Dependencies:** None

---

#### T-009 — Add WhatsApp CTA in Contact Section
- **Type:** design + content
- **Files:** `src/components/Contact.tsx`, `src/locales/en.ts`, `src/locales/sr.ts`
- **Skill:** Manual edit
- **Acceptance criteria:**
  - [ ] WhatsApp button added above the form with a pre-filled message URL
  - [ ] Button uses green styling (`bg-green-500 hover:bg-green-600`)
  - [ ] Bilingual locale keys added for button label
  - [ ] A visual divider ("OR") separates the WhatsApp button from the form
- **Complexity:** Simple
- **Dependencies:** None

---

#### T-010 — Fix Footer Social Links
- **Type:** content
- **Files:** `src/components/Footer.tsx`
- **Skill:** Manual edit
- **Acceptance criteria:**
  - [ ] Instagram `href` updated to real URL or icon hidden if account doesn't exist
  - [ ] YouTube `href` updated to real URL or icon hidden
  - [ ] TikTok icon optionally added (if account exists)
- **Complexity:** Simple
- **Dependencies:** None (requires user to provide real social URLs)

---

#### T-011 — Add WhatsApp Floating Button
- **Type:** component
- **Files:** `src/components/WhatsAppFloat.tsx` **(NEW)**, `src/pages/Home.tsx`
- **Skill:** Manual implementation
- **Acceptance criteria:**
  - [ ] Fixed-position floating green button (bottom-right, z-50) with WhatsApp icon
  - [ ] Links to WhatsApp with pre-filled coaching enquiry message
  - [ ] Subtle pulse animation using Framer Motion
  - [ ] Responsive: visible on all screen sizes
- **Complexity:** Simple
- **Dependencies:** None

---

#### T-012 — Add Services Card Hover CTA + Icons
- **Type:** design
- **Files:** `src/components/Services.tsx`
- **Skill:** Manual edit
- **Acceptance criteria:**
  - [ ] Each service card overlay adds a "Get Started →" button that scrolls to `#contact`
  - [ ] Each card gets a relevant Lucide icon in top-left badge position
  - [ ] CTA button uses gradient purple styling matching Plans section
- **Complexity:** Simple
- **Dependencies:** None

---

#### T-013 — Add FAQ Section (New Component)
- **Type:** component + content
- **Files:** `src/components/FAQ.tsx` **(NEW)**, `src/pages/Home.tsx`, `src/locales/en.ts`, `src/locales/sr.ts`
- **Skill:** Manual implementation
- **Acceptance criteria:**
  - [ ] New `FAQ.tsx` accordion component with 5–7 common questions
  - [ ] Questions address: remote coaching format, price justification, progress tracking, time commitment, diet flexibility
  - [ ] Smooth expand/collapse animation using Framer Motion
  - [ ] Section placed between Testimonials and Contact
  - [ ] Bilingual locale keys for all Q&A pairs
- **Complexity:** Medium
- **Dependencies:** T-006 (ordering dependency)

---

#### T-014 — Add Sticky Floating CTA Bar (Mobile)
- **Type:** component
- **Files:** `src/components/StickyBar.tsx` **(NEW)**, `src/pages/Home.tsx`
- **Skill:** Manual implementation
- **Acceptance criteria:**
  - [ ] Mobile-only (`md:hidden`) fixed bottom bar: "Ready to transform? → Book a Call"
  - [ ] Scrolls to `#contact` on click
  - [ ] Uses gradient purple CTA styling
  - [ ] Hides when contact section is visible (IntersectionObserver)
- **Complexity:** Medium
- **Dependencies:** None

---

#### T-015 — Performance: Images Lazy Loading & Sizing
- **Type:** performance
- **Files:** `src/components/About.tsx`, `src/components/Services.tsx`, `src/components/Results.tsx`
- **Skill:** Manual edit
- **Acceptance criteria:**
  - [ ] All non-hero `<img>` tags have `loading="lazy"`
  - [ ] Unsplash query params updated: `?w=800&q=75&auto=format&fit=crop`
  - [ ] Hero image remains `loading="eager"` (above fold)
- **Complexity:** Simple
- **Dependencies:** None

---

### 🟢 Low Priority

#### T-016 — Accessibility: ARIA Labels & Roles
- **Type:** accessibility
- **Files:** `src/components/Navbar.tsx`, `src/components/Hero.tsx`, `src/components/Results.tsx`, `src/components/Contact.tsx`
- **Skill:** Manual edit
- **Acceptance criteria:**
  - [ ] Navbar mobile menu button has `aria-expanded` and `aria-label`
  - [ ] Hero background div has `role="img" aria-label="..."` 
  - [ ] Results prev/next buttons have `aria-label="Previous slide"` / `aria-label="Next slide"`
  - [ ] Contact form status messages wrapped with `role="alert"`
- **Complexity:** Simple
- **Dependencies:** None

---

#### T-017 — Extract Hardcoded Data to `src/data/`
- **Type:** config
- **Files:** `src/data/services.ts` **(NEW)**, `src/data/plans.ts` **(NEW)**, `src/data/quiz.ts` **(NEW)**, `src/data/transformations.ts` **(NEW)**, `src/components/Services.tsx`, `src/components/Plans.tsx`, `src/components/Quiz.tsx`, `src/components/Results.tsx`
- **Skill:** Manual refactor
- **Acceptance criteria:**
  - [ ] Service card data extracted to `src/data/services.ts`
  - [ ] Plan addon config extracted to `src/data/plans.ts`
  - [ ] Quiz expert tips extracted to `src/data/quiz.ts`
  - [ ] Transformation pairs extracted to `src/data/transformations.ts`
  - [ ] All components updated to import from data files
- **Complexity:** Medium
- **Dependencies:** None

---

#### T-018 — Extract Shared Scroll Utility
- **Type:** config
- **Files:** `src/utils/scroll.ts` **(NEW)**, all components that define `scrollToSection`
- **Skill:** Manual refactor
- **Acceptance criteria:**
  - [ ] `scrollToSection(id: string)` and `scrollToContact()` extracted to `src/utils/scroll.ts`
  - [ ] All 6 components updated to import from utility
  - [ ] No local duplicate scroll functions remain
- **Complexity:** Simple
- **Dependencies:** T-017

---

## Execution Roadmap

### Phase 1 — Foundation (Instant Wins)
_No component changes. Zero visual regression risk._

| Task ID | Title | Complexity | Skill |
|---|---|---|---|
| T-001 | Fix Inter font loading | Simple | manual edit |
| T-002 | Add SEO meta tags | Simple | manual edit |
| T-015 | Performance: Images | Simple | manual edit |

---

### Phase 2 — Core Design Fixes (High Impact Visual)
_Brand-aligning fixes. Changes to existing components._

| Task ID | Title | Complexity | Skill |
|---|---|---|---|
| T-003 | Fix Navbar scrolled color | Simple | manual edit |
| T-004 | Enhance Hero section | Medium | manual edit |
| T-005 | About: Add trust stats | Simple | manual edit |
| T-008 | Dark section rhythm | Medium | manual edit |
| T-012 | Services hover CTA + icons | Simple | manual edit |
| T-009 | Contact: WhatsApp CTA | Simple | manual edit |
| T-010 | Fix Footer social links | Simple | manual edit (user action) |

---

### Phase 3 — New Features (New Components)
_Adds Testimonials, FAQ, WhatsApp float, Sticky bar._

| Task ID | Title | Complexity | Skill |
|---|---|---|---|
| T-006 | Add Testimonials section | Medium | manual implementation |
| T-011 | WhatsApp floating button | Simple | manual implementation |
| T-013 | Add FAQ section | Medium | manual implementation |
| T-014 | Sticky mobile CTA bar | Medium | manual implementation |

---

### Phase 4 — Polish & Trust
_Content replacements requiring user input._

| Task ID | Title | Complexity | Skill |
|---|---|---|---|
| T-007 | Fix Results (real photos) | Simple | user action + edit |
| T-016 | Accessibility ARIA labels | Simple | manual edit |

---

### Phase 5 — Code Quality
_Refactoring. Zero visual change._

| Task ID | Title | Complexity | Skill |
|---|---|---|---|
| T-017 | Extract data to `src/data/` | Medium | manual refactor |
| T-018 | Extract scroll utility | Simple | manual refactor |

---

## Dependency Graph

```
T-001 → T-002 (same file)
T-003 (independent)
T-004 (independent)
T-005 (independent)
T-006 → T-013 (ordering: Testimonials before FAQ in Home.tsx)
T-007 (requires user to supply real photos)
T-008 (independent)
T-009 (independent)
T-010 (requires user to supply real social URLs)
T-011 (independent)
T-012 (independent)
T-013 → depends on T-006 placement
T-014 (independent)
T-015 (independent)
T-016 (independent)
T-017 → T-018
```

---

## Files That Will Change

| File | Tasks | Change Summary |
|---|---|---|
| `index.html` | T-001, T-002 | Add Inter font link + SEO meta tags |
| `src/components/Navbar.tsx` | T-003 | Scrolled bg → dark, link colors, CTA gradient |
| `src/components/Hero.tsx` | T-004 | Sub-headline, social proof line, gradient CTA, scroll hint |
| `src/components/About.tsx` | T-005, T-015 | Stat cards row, lazy image loading |
| `src/components/Services.tsx` | T-012, T-015 | Hover CTA button, icon badges, lazy images |
| `src/components/Plans.tsx` | T-008 | Dark background, updated text/card colors |
| `src/components/Quiz.tsx` | T-008 | Dark background, updated card internals |
| `src/components/Results.tsx` | T-007, T-015, T-016 | Real photos, captions, lazy loading, ARIA |
| `src/components/Contact.tsx` | T-009, T-016 | WhatsApp CTA option, aria-live for form status |
| `src/components/Footer.tsx` | T-010 | Real social URLs |
| `src/pages/Home.tsx` | T-006, T-011, T-013, T-014 | Import and render new components |
| `src/locales/en.ts` | T-004, T-005, T-006, T-007, T-009, T-013 | New locale keys for sub-headline, stats, testimonials, FAQ |
| `src/locales/sr.ts` | T-004, T-005, T-006, T-007, T-009, T-013 | SR translations for all new keys |

---

## New Files to Create

| File | Task | Purpose |
|---|---|---|
| `src/components/Testimonials.tsx` | T-006 | Client testimonial cards section |
| `src/components/WhatsAppFloat.tsx` | T-011 | Fixed floating WhatsApp CTA button |
| `src/components/FAQ.tsx` | T-013 | Accordion FAQ section |
| `src/components/StickyBar.tsx` | T-014 | Mobile sticky bottom CTA bar |
| `src/data/services.ts` | T-017 | Service card data |
| `src/data/plans.ts` | T-017 | Plan addon configuration |
| `src/data/quiz.ts` | T-017 | Expert tips dictionary |
| `src/data/transformations.ts` | T-017 | Before/after slide data |
| `src/utils/scroll.ts` | T-018 | Shared scroll-to utility function |

---

## Skills Used in This Plan

| Skill | Tasks | Purpose |
|---|---|---|
| `/design-audit` | reference | Source of all recommendations in this plan |
| `/change-planner` | this document | Plan structure and skill gap analysis |

---

## Notes

- **Start ALWAYS with Phase 1** — T-001 (font) is a silent production bug. Fix it first.
- **T-007 and T-010 require user input** — real client photos and real social media URLs must be provided by the coach/client before these tasks can be fully completed.
- **Bilingual rule** — Every content addition (sub-headlines, stat labels, button text, testimonials, FAQ Q&A) must have both `en` and `sr` locale keys. Never hardcode visible text strings in components.
- **Brand preservation** — Plans and Quiz going dark (T-008) dramatically improves the premium feel but must be tested on mobile to ensure readability of all interactive elements.
- **Task IDs are stable** — Do not renumber. Mark done tasks with ✅ inline as work progresses.
