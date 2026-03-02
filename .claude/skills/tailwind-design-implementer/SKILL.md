---
name: tailwind-design-implementer
description: Use when someone asks to change colors, apply dark theme, make a section dark, add gradients, add glow effects, fix hover effects, change backgrounds, update typography, apply shadow effects, or make any visual/styling change to an existing component in the b-lila-fitness application.
argument-hint: "[ComponentName] [change-type] — e.g. Navbar dark, Hero gradient-cta, Plans dark-section"
---

# Tailwind Design Implementer Skill — b-lila-fitness

## What This Skill Does

Applies **visual and styling changes** to existing React/TSX components in the b-lila-fitness project. All changes are:

- Consistent with the **purple/fuchsia brand palette**
- TailwindCSS v4 utility classes only (no inline styles except for dynamic values)
- Responsive — breakpoints (`md:`, `lg:`) applied wherever needed
- Non-destructive — logic, structure, and translations are never touched

---

## Steps

### 1. Read the target file

Read the full content of `src/components/$ARGUMENTS[0].tsx` (or the file specified) before making any changes. Never modify code you haven't read.

Also read `CLAUDE.md` and `src/index.css` to confirm current brand tokens.

### 2. Identify change type from argument

Parse `$ARGUMENTS` to determine what kind of change to apply:

| Keyword in argument | Change type | Description |
|---|---|---|
| `dark` / `dark-section` | Section theming | Swap `bg-white`/`bg-gray-50` → dark; update text colors |
| `gradient-cta` / `gradient-button` | Button gradient | Apply `from-purple-600 to-fuchsia-500` gradient with optional glow |
| `navbar-scroll` | Navbar scroll state | Update `isScrolled` bg from white → dark |
| `hover` / `hover-cta` | Hover effects | Add `hover:scale-105`, `group-hover:` reveals, transitions |
| `glow` / `shadow-glow` | Glow shadows | Add `shadow-[0_0_30px_rgba(147,51,234,0.4)]` and variants |
| `typography` | Text scale | Adjust font sizes, weights, tracking |
| *other* | Use description | Apply the described change using brand conventions below |

### 3. Brand-aligned change recipes

Use these exact patterns. Never invent new color values.

#### Dark Section Conversion
```
bg-white → bg-gray-900
bg-gray-50 → bg-gray-950
text-gray-900 → text-white         (headings)
text-gray-600 → text-gray-300      (body)
text-gray-500 → text-gray-400      (muted/subtitles)
border-gray-200 → border-gray-700  (card borders)
bg-gray-100 → bg-gray-800          (card backgrounds)
shadow-lg → shadow-2xl shadow-black/30  (card shadows on dark)
```

#### Primary CTA Button (gradient + optional glow)
```
// Standard gradient button
className="bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white font-bold py-4 px-10 rounded-full transition-all uppercase shadow-xl"

// With glow (hero-level CTAs)
className="... shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:shadow-[0_0_45px_rgba(217,70,239,0.6)]"
```

#### Navbar Scrolled State (dark)
```jsx
// Before
isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
// Nav link: text-gray-700 hover:text-purple-600

// After
isScrolled ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-black/30 py-3' : 'bg-transparent py-5'
// Nav link (scrolled): text-gray-200 hover:text-fuchsia-400
// Logo (scrolled): stays gradient (no change needed)
```

#### Hover Card Reveal (Services pattern)
```jsx
// Reveal button on hover inside card overlay
<div className="... group-hover:translate-y-0 ...">
  <button className="mt-4 text-white bg-gradient-to-r from-purple-600 to-fuchsia-500 
    px-5 py-2 rounded-full text-sm font-semibold opacity-0 transition-opacity 
    duration-300 delay-150 group-hover:opacity-100">
    Get Started →
  </button>
</div>
```

#### Glow on Stat/Badge Cards
```jsx
className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-center 
  hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-shadow"
```

#### Section Separator Gradient Lines
```jsx
<div className="h-px bg-gradient-to-r from-transparent via-purple-600/50 to-transparent my-16" />
```

### 4. Apply the changes

Directly modify the file. Make surgical changes — only touch the classes, colors, and elements specified. Do NOT:
- Change component logic or state
- Change JSX structure/hierarchy
- Remove or add translation keys
- Change import statements (unless adding a needed Lucide icon)

### 5. Verify consistency

After modifying, review the changed file and check:
- [ ] All text on dark backgrounds is light enough (min `text-gray-300`)
- [ ] All purple/fuchsia gradient uses correct direction (`from-purple-600 to-fuchsia-500`)
- [ ] Hover transitions include `transition-all` or `transition-colors duration-300`
- [ ] Responsive breakpoints are preserved (no mobile breakpoints removed)

### 6. Report what changed

After editing, provide a concise summary:
```
✅ [ComponentName] updated:
- Line X: bg-white → bg-gray-900
- Line Y: text-gray-700 → text-gray-200
- Line Z: Added gradient glow to CTA button
```

---

## Notes

- **Always read before editing** — never modify blindly.
- **TailwindCSS v4**: all classes are standard utility classes. Custom `section-heading` class is defined in `src/index.css`.
- **Arbitrary values** — Tailwind v4 supports `shadow-[0_0_30px_rgba(...)]` syntax. Use it for glow effects.
- **Never change both dark and light simultaneously** in one call — do one section at a time to avoid regressions.
- **This skill does NOT add locale keys or ARIA** — use `/i18n-content-adder` and `/accessibility-fixer` for those.
