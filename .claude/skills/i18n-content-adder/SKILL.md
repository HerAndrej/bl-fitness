---
name: i18n-content-adder
description: Use when someone asks to add translations, add locale keys, add Serbian translation, add English translation, add bilingual content, add new text to the locale files, or update src/locales/en.ts and src/locales/sr.ts for the b-lila-fitness application.
argument-hint: "[section-key] — e.g. hero.sub, testimonials, faq — or describe what text to add"
---

# i18n Content Adder Skill — b-lila-fitness

## What This Skill Does

Adds **new locale keys** to **both** `src/locales/en.ts` and `src/locales/sr.ts` simultaneously. This skill enforces the bilingual invariant: **both files are always updated together, never one without the other.**

---

## Steps

### 1. Read both locale files

Always read BOTH files before making any changes:
- `src/locales/en.ts`
- `src/locales/sr.ts`

Understand the existing key structure (top-level sections like `nav`, `hero`, `about`, `services`, `plans`, `quiz`, `results`, `contact`, `footer`, and any new sections already added).

### 2. Determine what keys to add

Based on `$ARGUMENTS`:
- If `$ARGUMENTS` is a section key (e.g. `testimonials`), add a full new top-level key group.
- If `$ARGUMENTS` is a dotted key (e.g. `hero.sub`), add only that specific key inside the existing section.
- If `$ARGUMENTS` is a description, infer the needed keys from context.

Also check: **does the component file that will use these keys already exist?** Read it if it does, to extract all `t.[key]` references precisely.

### 3. Write English content first

Compose the English text in `en.ts` that is:
- Clear, motivating, fitness-industry appropriate
- Consistent in tone with existing EN strings (confident, empowering, professional)
- Uppercase for headings (consistent with `section-heading` style)
- Sentence case for body/subtitle text

### 4. Write Serbian translation

Compose the Serbian text in `sr.ts` that is:
- Natural Serbian — not Google Translate quality
- Consistent with existing SR strings (read them for tone reference)
- Do NOT just transliterate English — adapt fitness/coaching terminology naturally

**Common SR fitness terms:**
- "workout" → "trening"
- "coach" → "trener" or "coach"
- "transformation" → "transformacija"
- "nutrition" → "ishrana"
- "mindset" → "mentalitet" or "mindset"
- "plan" → "plan"
- "results" → "rezultati"
- "Book a call" → "Zakaži konsultaciju"

### 5. Add keys to both files

Insert new keys at the **correct position** in each file:

- For **new top-level sections** (e.g. `testimonials`, `faq`): add before the closing `}` of the exported object, after the last existing section.
- For **keys inside an existing section**: add after the last key in that section, before the closing `}` of that section.
- Maintain consistent formatting: 2-space indentation, trailing commas.

**Pattern for a new top-level section:**
```ts
// In en.ts and sr.ts, add inside the export const translations = { ... } object:
  testimonials: {
    title1: 'CLIENT',
    title2: 'RESULTS',
    sub: 'Real people, real transformations.',
    c1Name: 'Sarah M.',
    c1Quote: 'Lost 12kg in 3 months...',
    c1Plan: 'Mind & Muscle',
    // ...
  },
```

### 6. Verify the result

After editing both files:
- [ ] Both `en.ts` and `sr.ts` have the **same set of keys** in the **same order**
- [ ] No key exists in one file but not the other
- [ ] TypeScript object syntax is valid (commas, no trailing comma on last key before `}`)
- [ ] The locale key matches exactly what the component references via `t.[key]`

### 7. Report to user

```
✅ Locale keys added to both en.ts and sr.ts:

Section: testimonials
Keys added: title1, title2, sub, c1Name, c1Quote, c1Plan, c2Name, c2Quote, c2Plan, c3Name, c3Quote, c3Plan

Both files are in sync. ✓
```

---

## Notes

- **CRITICAL: Always edit BOTH files in the same response.** Leaving one file behind breaks runtime.
- **Never overwrite existing keys** — only add new ones. Check for duplicates before inserting.
- **Serbian content must be genuine translation** — ask user if you're unsure about specific SR phrasing for fitness terms.
- **Key naming convention**: camelCase, section prefix first (e.g. `t.testimonials.c1Name`, not `t.c1NameTestimonials`).
- **This skill does NOT create components** — use `/react-component-creator` for that.
- **If $ARGUMENTS references keys that don't exist in the component file yet**, flag it and ask where they'll be used before adding them.
