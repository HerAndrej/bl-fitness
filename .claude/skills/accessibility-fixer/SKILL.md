---
name: accessibility-fixer
description: Use when someone asks to fix accessibility, add ARIA labels, add aria-expanded, add role attributes, add role="alert", fix focus states, fix contrast, improve screen reader support, or fix any WCAG compliance issue in a React component of the b-lila-fitness application.
argument-hint: "[ComponentName] — e.g. Navbar, Hero, Contact, Results — or 'all' for full project"
---

# Accessibility Fixer Skill — b-lila-fitness

## What This Skill Does

Adds ARIA attributes, semantic roles, focus states, and other accessibility fixes to React/TSX components in the b-lila-fitness application, targeting **WCAG 2.1 AA** compliance.

Operates either on a **specific component** (when `$ARGUMENTS` is a component name) or across **all components** (when `$ARGUMENTS` is `all` or empty).

---

## Steps

### 1. Read the target file(s)

- If `$ARGUMENTS` is a component name: read `src/components/$ARGUMENTS.tsx` only.
- If `$ARGUMENTS` is `all` or empty: read ALL files listed in `CLAUDE.md` under Source Structure.

Always read the file before modifying it. Never guess what's in it.

### 2. Run the accessibility checklist

For each component, check these issues. Flag every occurrence:

#### Interactive Elements
- [ ] Every `<button>` without visible text has `aria-label="[descriptive label]"`
- [ ] Toggle buttons have `aria-expanded={boolean}` that reflects their current state
- [ ] Navigation landmarks use `<nav aria-label="Main navigation">` or `<nav aria-label="Footer navigation">`
- [ ] Mobile menu toggle has `aria-controls="[menu-id]"` pointing to the menu's `id`

#### Images
- [ ] Every `<img>` has a non-empty `alt` attribute
- [ ] Decorative background images (CSS `background-image`) have `aria-hidden="true"` or `role="presentation"` on their wrapper
- [ ] Meaningful images have specific alt text (not just the filename)

#### Forms (Contact.tsx)
- [ ] Every `<input>` and `<textarea>` has an associated `<label>` (via `htmlFor` + `id`)
- [ ] Form submission status messages use `role="alert"` so screen readers announce them immediately
- [ ] Error messages use `aria-live="polite"` or `role="alert"`
- [ ] Required fields have `aria-required="true"` in addition to `required` attribute

#### Sliders / Carousels (Results.tsx)
- [ ] Prev/Next buttons have `aria-label="Previous slide"` / `aria-label="Next slide"`
- [ ] Dot indicators have `aria-label="Go to slide [N]"` and `aria-current="true"` on active
- [ ] The slides container has `role="region" aria-label="Client transformations"`

#### Language
- [ ] `<html lang="...">` reflects the current language. Note: since `index.html` is static, add a comment that JS should update `document.documentElement.lang` in `LanguageContext.tsx` when language switches.

#### Focus Management
- [ ] Interactive elements are reachable by Tab key (no `tabIndex={-1}` without a reason)
- [ ] Focus is visually obvious — if `outline-none` is used, a replacement focus indicator is present

### 3. Apply fixes

For each flagged issue, apply the fix directly to the file. Use these patterns:

#### Navbar mobile menu button
```tsx
<button
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  aria-expanded={isMobileMenuOpen}
  aria-controls="mobile-menu"
  aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
  className="text-gray-900 p-1"
>
```

```tsx
// Mobile menu overlay — add id
<div id="mobile-menu" className={`fixed inset-0 ...`}>
```

#### Hero background image div
```tsx
<div
  role="img"
  aria-label="Professional gym training environment"
  className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: '...' }}
>
  <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
</div>
```

#### Contact form status message
```tsx
{message && (
  <div
    role="alert"
    aria-live="polite"
    className={`p-4 rounded-lg text-center font-medium ${...}`}
  >
    {message}
  </div>
)}
```

#### Results slider buttons
```tsx
<button
  onClick={prevSlide}
  aria-label="Previous transformation slide"
  className="..."
>
  <ChevronLeft size={24} aria-hidden="true" />
</button>

<button
  onClick={nextSlide}
  aria-label="Next transformation slide"
  className="..."
>
  <ChevronRight size={24} aria-hidden="true" />
</button>
```

#### Results dot indicators
```tsx
<button
  key={index}
  onClick={() => setCurrentIndex(index)}
  aria-label={`Go to slide ${index + 1}`}
  aria-current={currentIndex === index ? 'true' : undefined}
  className={`w-3 h-3 rounded-full transition-colors ...`}
/>
```

#### LanguageContext update for `lang` attribute
```tsx
// In src/LanguageContext.tsx, inside the setLang handler or useEffect:
useEffect(() => {
  document.documentElement.lang = lang === 'sr' ? 'sr' : 'en';
}, [lang]);
```

### 4. Generate accessibility report

Before applying fixes, output a report:

```
🔍 Accessibility Audit — [ComponentName]

Issues found:
- ❌ Navbar.tsx L58: Mobile menu button missing aria-expanded and aria-label
- ❌ Hero.tsx L18: Background image div needs role="img" and aria-label
- ❌ Results.tsx L70-81: Prev/Next buttons missing aria-label
- ⚠️  Contact.tsx L133: Status message missing role="alert"

Applying fixes...
```

Then apply each fix.

### 5. Report result

```
✅ Accessibility fixes applied to [ComponentName]:
- Added aria-expanded + aria-label to mobile menu toggle (Navbar)
- Added role="img" aria-label to hero background (Hero)
- Added aria-label to slider nav buttons (Results)
- Added role="alert" to form status (Contact)
- Added lang attribute update to LanguageContext

WCAG 2.1 AA target: ✓ (verify with browser accessibility tools)
```

---

## Notes

- **Read before fixing** — never add ARIA attributes to elements you haven't inspected.
- **`aria-hidden="true"` on decorative SVG icons** — add to all Lucide icon instances inside buttons/links that already have visible text or `aria-label`. E.g., `<ChevronLeft size={24} aria-hidden="true" />`.
- **Both flags and emoji in Navbar** — flag emoji (`🇬🇧`, `🇷🇸`) are read aloud by screen readers as "flag: United Kingdom". The `title` attribute already on those buttons is good. Add `aria-label="Switch to English"` / `aria-label="Prebaci na srpski"` instead for clarity.
- **`outline-none` without replacement** — if any `focus:outline-none` is found without `focus:ring-*`, add `focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2`.
- **This skill does NOT change visual design, logic, or translations** — only ARIA/semantic attributes.
