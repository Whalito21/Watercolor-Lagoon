# Claude Code — Water Colour Exhibition
## Master Project Prompt

---

## Project Overview

You are helping build **Water Colour Exhibition** — an interactive digital storytelling experience about the environmental impact of Thailand's Southern Landbridge project. The story is told from the perspective of a sea creature the user picks, guiding them through 5 chapters with branching choices that lead to a shared "fishbowl" at the end where all participants swim together.

**Live prototype:** https://whalito21.github.io/Watercolor-Lagoon/  
**Aesthetic:** Collage / kindergarten paper-cut. Hand-made, torn paper, watercolour washes. Everything looks glued down.  
**Audience:** Thai general public  
**Tone:** Quietly reflective. Personal, not political. No villain. No lecture.

---

## Current State

The prototype is a **single `index.html` file** — no build step, no dependencies, no framework. All CSS and JS are inline. The only external dependency is Google Fonts (Caveat).

### What already works
- Screen flow: Splash → Language → Name input → Creature picker → Story → Fishbowl
- Typewriter text engine with word-by-word spring animation
- Paper/collage visual system (SVG crayon filters, torn clip-paths, watercolour gradients)
- Screen transitions (crumple out / paper drop in)
- Fish swimming in Lissajous figure-8 paths in the bowl
- Bilingual UI scaffold (EN/TH stored in `state.lang`)

### What needs to be built
1. **Full 5-chapter branching story** (content file ready — see below)
2. **Supabase integration** for real participant count + real-time fishbowl
3. **Project refactor** from single file to maintainable structure
4. **Vercel deployment** with environment variable handling

---

## Story Architecture

The story has been written and is ready in `story-content.js`. Do not rewrite the story — integrate it exactly as provided.

### Flow
```
Chapter 1 (linear) 
  → Chapter 2 (Choice A or B) 
    → Chapter 3 (branches A or B based on ch2 choice) 
      → Chapter 4 (Choice A or B, paths converge here) 
        → Chapter 5 (branches A or B based on ch4 choice) 
          → Fishbowl
```

### State object (extend existing)
```javascript
const state = {
  lang: 'th',         // 'en' | 'th'
  username: '',
  creature: '',       // emoji
  creatureName: '',
  choice2: null,      // 'a' | 'b' — Chapter 2 choice
  choice4: null,      // 'a' | 'b' — Chapter 4 choice
}
```

### How to render story text
```javascript
// Chapter 1 & 4 (linear / converged)
STORY[state.lang].chapter1.text

// Chapter 3 (branched by ch2 choice)
const ch3 = STORY[state.lang].chapter3[state.choice2]
ch3.intro + '\n\n' + ch3.text

// Chapter 5 (branched by ch4 choice)
STORY[state.lang].chapter5[state.choice4].text

// Fishbowl result message
STORY[state.lang].chapter5.bowlText[state.choice4]
  .replace('{name}', state.username)
```

---

## Design System (do not change)

### Colors
```css
--teal:  #4ECDC4
--sand:  #FFE17A
--coral: #FFB3B3
--green: #A8E6A3
--ink:   #2D3748
--paper: #F5F0E8
--deep:  #1a6b60
```

### Typography
- **Caveat** only (Google Fonts) — weights 400 / 600 / 700

### Key visual patterns
- Paper shadow: `box-shadow: 4px 4px 0px rgba(0,0,0,.16), 8px 8px 0px rgba(0,0,0,.09)`
- Torn edges: `clip-path: polygon(...)` with 40–50 alternating points
- SVG filters: `#crayon` (cards/buttons), `#crayonBowl` (bowl outline)
- Watercolour BG: layered `radial-gradient` ellipses, 3–5 layers per screen

---

## Roadmap — Build in this order

### Phase 1 — Story Integration (Day 1)
**Goal:** All 5 chapters work with branching choices

Tasks:
- Add `story-content.js` as a separate file (or paste into `<script>` block)
- Create Screens S5a–S5e for chapters 1–5 (currently only one story screen exists)
- Wire Chapter 2 choice buttons → `state.choice2`
- Wire Chapter 4 choice buttons → `state.choice4`
- Chapter 3 renders correct branch based on `state.choice2`
- Chapter 5 renders correct branch based on `state.choice4`
- Fishbowl result message uses `state.choice4`
- Typewriter engine works across all chapters
- Progress dots update correctly (currently 4 dots — expand to show chapter progress)
- "Skip" link works on all typewriter screens
- Thai language renders correctly throughout

Acceptance criteria:
- Can complete all 4 paths (A→A, A→B, B→A, B→B) without breaking
- Language switch between EN and TH works end-to-end

---

### Phase 2 — Supabase Integration (FUTURE VERSION — SKIP FOR NOW)
> ⚠️ **Do not implement this phase yet.** Architecture is documented here for future reference only. Keep the fishbowl counter as a local mock (random 5–9 or hardcoded). Do not add Supabase client or any network calls.

#### Planned database schema (for reference only)
```sql
create table participants (
  id uuid default gen_random_uuid() primary key,
  username text not null,
  creature_emoji text not null,
  creature_name text not null,
  choice2 text check (choice2 in ('a', 'b')),
  choice4 text check (choice4 in ('a', 'b')),
  lang text check (lang in ('en', 'th')),
  created_at timestamptz default now()
);

-- Enable realtime
alter publication supabase_realtime add table participants;
```

#### Planned integration points (for reference only)
- On arriving at fishbowl screen → `INSERT` participant record
- Replace fake random counter with real `COUNT(*)` query
- Subscribe to Supabase Realtime → on new INSERT, spawn that user's fish live
- Handle edge cases: duplicate submissions, network failure

**When this phase is activated:** install `@supabase/supabase-js`, add env vars, wire up `supabase.js` module.

---

### Phase 3 — Project Refactor (Day 2–3)
**Goal:** Maintainable file structure without breaking the single-file aesthetic

```
watercolour-exhibition/
├── index.html          ← lean shell, loads scripts
├── style.css           ← extracted CSS
├── story-content.js    ← story data (already written)
├── main.js             ← all JS logic
├── supabase.js         ← Supabase client + queries
└── .env                ← environment variables (gitignored)
```

Rules:
- No build step unless the team explicitly wants one
- No framework (React, Vue) unless team decides otherwise
- Keep all animations and filters exactly as they are
- CSS variables must stay on `:root`

---

### Phase 4 — Vercel Deployment (Day 3)
**Goal:** Production URL, faster than GitHub Pages, env var support

Steps:
- Connect GitHub repo to Vercel
- Add `SUPABASE_URL` and `SUPABASE_ANON_KEY` to Vercel environment variables
- Configure `vercel.json` if needed for static site
- Test on mobile (primary audience uses phones)
- Verify Thai font renders correctly on iOS/Android

---

### Phase 5 — Polish (Day 4)
**Goal:** Shareable link, mobile QA, final details

- Share button generates URL with `?creature=🐠` param so shared links pre-select the creature
- Add UTM params to track where visitors come from
- Mobile viewport check — story text must be readable without horizontal scroll
- Test all 4 story paths on real device
- Add Open Graph meta tags for social sharing preview

---

## Important Constraints

- **Do not change the visual design** — the artist has approved the aesthetic
- **Do not add new dependencies** without checking first
- **Do not rewrite story text** — use `story-content.js` exactly as provided
- **Preserve all existing animations** — crumple, paperDrop, splat, wordAppear, bubUp
- **Thai text** uses `คุณ` (not `เธอ`) throughout
- **No villain framing** — the story holds both sides of the landbridge debate honestly

---

## Files to Read First

Before writing any code, read:
1. The current `index.html` from the live prototype
2. `story-content.js` (the story data file)
3. This prompt

Then ask: *"Which phase should I start with?"* — and wait for confirmation before writing code.
