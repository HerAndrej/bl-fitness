---
name: change-planner
description: Use when someone asks to create a plan, implementation plan, detailed plan for changes, plan the improvements, plan what to build, plan the changes from the audit, or turn recommendations into a step-by-step execution plan for the b-lila-fitness application.
disable-model-invocation: false
argument-hint: "[optional: path to audit report or topic to plan]"
---

# Change Planner Skill — b-lila-fitness

## What This Skill Does

Takes a set of desired changes (from a design audit report, a user description, or both) and produces a **detailed, structured implementation plan** for the b-lila-fitness application.

Before writing the plan it:
1. **Checks which skills already exist** — lists `.claude/skills/` to inventory what's available.
2. **Identifies skills needed to execute the plan** — for each major area (design, components, accessibility, SEO, perf, etc.) it decides whether an existing skill covers it or whether a new skill must be created first.
3. **Creates missing skills using `skill-builder`** — if a required skill does not exist, invokes the skill-builder workflow to create it *before* generating the plan.
4. **Outputs the plan** — a prioritized, file-level, component-level implementation plan saved as `change-plan.md` in the project root.

---

## Steps

### Phase 0 — Determine Input Source

1. If `$ARGUMENTS` is a file path (e.g. `design-audit-report.md`), read that file.
2. If `$ARGUMENTS` is empty or a description (not a path), check whether `design-audit-report.md` exists in the project root (`c:\Users\User\Desktop\Aplikacije1\b-lila-fitness\design-audit-report.md`). If yes, read it. If not, ask the user: "No audit report found. Please describe the changes you want to plan, or run `/design-audit` first."
3. Read `CLAUDE.md` and `package.json` to understand tech stack and project conventions.

### Phase 1 — Skill Inventory & Gap Analysis

4. List all directories inside `.claude/skills/` to see what skills exist.
5. For each **major change category** found in the input (e.g. design/visual, new components, accessibility, i18n, performance, SEO, testing), decide:
   - ✅ **Covered** — an existing skill handles this area
   - ⚠️ **Partial** — an existing skill helps but a new supporting skill would improve quality
   - ❌ **Missing** — no relevant skill exists

6. For every ❌ Missing skill:
   - Follow the `skill-builder` process to create that skill **before continuing**.
   - The skill-builder is at `.claude/skills/skill-builder/SKILL.md` — read it and follow its Build Phase instructions.
   - After creating the skill, update your inventory.

> **Example:** If the plan includes implementing Testimonials, check if a `component-creator` or `testimonials` skill exists. If not, use skill-builder to create a focused `component-creator` skill first.

### Phase 2 — Decompose Changes into Tasks

7. For each change/recommendation from the input, break it into atomic tasks with the following attributes:
   - **Task ID** — sequential (T-001, T-002, …)
   - **Title** — short human-readable name
   - **Type** — `design` | `component` | `content` | `accessibility` | `performance` | `i18n` | `config`
   - **Priority** — 🔴 High / 🟡 Medium / 🟢 Low (preserve priority from audit if available)
   - **Affected files** — list exact file paths relative to project root
   - **Skill to use** — which skill (if any) should be invoked to execute this task
   - **Acceptance criteria** — 1–3 bullet points: what "done" looks like
   - **Estimated complexity** — Simple (< 1h) / Medium (1–3h) / Complex (3h+)
   - **Dependencies** — list Task IDs this task depends on (or "None")

### Phase 3 — Build the Execution Roadmap

8. Group tasks into **phases** ordered by impact + dependency:
   - **Phase 1 — Foundation** (config, tokens, design system, base styles)
   - **Phase 2 — Core Components** (high-priority visible changes)
   - **Phase 3 — New Features** (new sections, widgets, pages)
   - **Phase 4 — Polish** (animations, micro-interactions, copy tuning)
   - **Phase 5 — QA & Performance** (accessibility audit, Lighthouse, cross-browser)

9. Within each phase, order tasks from lowest-dependency to highest-dependency.

### Phase 4 — Write the Plan File

10. Write the complete plan to `change-plan.md` in the project root (`c:\Users\User\Desktop\Aplikacije1\b-lila-fitness\change-plan.md`), using the **Output Format** below.

### Phase 5 — Summarize to User

11. After writing the file, give the user:
    - 3–5 bullet executive summary (key decisions, total task count, phasing rationale)
    - List of any **new skills created** during Phase 1
    - Path to `change-plan.md`

---

## Output Format

```markdown
# 🗺️ b-lila-fitness — Change Implementation Plan
_Generated: [date]_
_Source: [audit report / user description]_

---

## Skill Inventory

| Skill | Status | Notes |
|---|---|---|
| design-audit | ✅ Exists | Used for auditing |
| change-planner | ✅ Exists | This skill |
| [skill-name] | ❌ Created now | Needed for [reason] |

---

## Task List

### 🔴 High Priority

#### T-001 — [Task Title]
- **Type:** design
- **Files:** `src/index.css`, `src/components/Hero.tsx`
- **Skill:** `/design-audit` (reference) + manual edit
- **Acceptance criteria:**
  - [ ] Purple-to-fuchsia gradient applied to all primary CTAs
  - [ ] Contrast ratio ≥ 4.5:1 verified
- **Complexity:** Simple
- **Dependencies:** None

[Repeat per task]

---

### 🟡 Medium Priority
[Tasks...]

### 🟢 Low Priority
[Tasks...]

---

## Execution Roadmap

### Phase 1 — Foundation
| Task ID | Title | Complexity | Skill |
|---|---|---|---|
| T-001 | Update color tokens | Simple | manual |

### Phase 2 — Core Components
...

### Phase 3 — New Features
...

### Phase 4 — Polish
...

### Phase 5 — QA & Performance
...

---

## Dependency Graph

```
T-001 → T-003 → T-007
T-002 → T-004
T-005 (independent)
```

---

## Files That Will Change

| File | Tasks | Change Summary |
|---|---|---|
| `src/index.css` | T-001, T-002 | Color tokens, typography scale |
| `src/components/Hero.tsx` | T-003 | Gradient CTA, video background |

---

## New Files to Create

| File | Task | Purpose |
|---|---|---|
| `src/components/Testimonials.tsx` | T-008 | New testimonials section |

---

## Skills Used in This Plan

| Skill | Tasks | Purpose |
|---|---|---|
| `/design-audit` | reference | Source of recommendations |
| `/component-creator` | T-008, T-009 | Scaffold new components |
```

---

## Notes

- **Always run Phase 0 first** — never start decomposing tasks before you know the input.
- **Always run Phase 1 (skill gap analysis) before Phase 2** — missing skills block consistent execution.
- **Preserve the brand**: purple/fuchsia palette, dark backgrounds, Inter font. The plan must not contradict `CLAUDE.md`.
- **This skill does NOT apply changes** — it only plans. To execute tasks, invoke the relevant skill or ask Claude to implement each task.
- **Bilingual**: Every content change must account for both `sr` and `en` locales.
- **Task IDs are stable**: Once written to `change-plan.md`, task IDs should not be renumbered. Add new tasks at the end.
- **Keep the plan file up to date**: If tasks are later marked ✅ done, update `change-plan.md` accordingly.
