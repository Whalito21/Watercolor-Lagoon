# Water Colour Exhibition — Interactive Story

## Project overview
A single-file interactive storytelling website about the **environmental impact of Thailand's Southern Landbridge project**. Built as a **prototype for a team pitch**. The aesthetic is **collage / kindergarten paper-cut** — everything looks hand-made, torn from paper and glued down.

Topic: The Southern Landbridge is a proposed 90km highway/railway/port corridor cutting across the Thai peninsula between the Andaman Sea and Gulf of Thailand, threatening 8,000+ hectares of mangrove and 300-year-old fishing communities.

## File structure
```
water-colour-exhibition/
└── index.html    ← entire site (HTML + CSS + JS, no build step, no dependencies)
```
No external assets. All images are CSS gradients or emoji. Only external dependency is Google Fonts (Caveat).

## Design system

### Color palette
```
--teal:   #4ECDC4   ocean teal (primary)
--sand:   #FFE17A   warm sand yellow (choices, result card)
--coral:  #FFB3B3   coral pink (B-choice button, decorative)
--green:  #A8E6A3   leaf green (decorative)
--ink:    #2D3748   dark blue-grey (all text and borders)
--paper:  #F5F0E8   warm off-white (base background)
--deep:   #1a6b60   deep ocean (bowl bottom)
```

### Typography
- **Caveat** (Google Fonts, weights 400/600/700) — every single element. Handwritten feel.

### SVG Filters
Two SVG `<filter>` definitions in a hidden `<svg>` at the top of `<body>`:
- `#crayon` — `feTurbulence` + `feDisplacementMap` (scale 2.6) — applied to cards, buttons, tags via `filter:url(#crayon)`
- `#crayonBowl` — looser displacement (scale 3.2, different seed) — applied only to `.bowl` outline

### Key CSS patterns
- **Paper shadow**: `box-shadow: 4px 4px 0px rgba(0,0,0,.16), 8px 8px 0px rgba(0,0,0,.09)`
- **Lift shadow**: `box-shadow: 6px 6px 0px rgba(0,0,0,.2), 14px 14px 0px rgba(0,0,0,.1)`
- **Torn paper edges**: `clip-path: polygon(...)` with 40–50 alternating high/low percentage points
- **Watercolour background**: layered `radial-gradient(ellipse ...% ...% at X% Y%, rgba(...) 0%, transparent N%)` — 3–5 layers per screen
- **Floating cut-outs**: `.cut` divs with `position:absolute`, `pointer-events:none`, background colors, and `clip-path` or `border-radius:50%` for shapes

## Screen flow
```
S1 (Splash) → S2 (Language) → S3 (Name input) → S4 (Pick creature) → S5 (Story + Choice) → S6 (Fish bowl result)
```
Each transition: current screen plays `crumple` animation (rotates + scales + flies right), new screen plays `paperDrop` animation (falls from above with bounce).

### Screen 1 — Splash
Title, subtitle, 3 paper tags (Marine life / Mangroves / Communities), "Begin the story →" button, prototype stamp.

### Screen 2 — Language
Two fish cards (🐠 Thai / 🐡 English). Click triggers `cardFlip` animation then navigates to S3. Language is stored in `state.lang` but currently doesn't change story text (prototype).

### Screen 3 — Name input
Single text input. Enter key or button submits. Name stored in `state.username`. Used in fish bowl result message.

### Screen 4 — Creature picker
5 creature cards scattered at −4°/+2°/−1°/+3°/−2° rotations. Selecting one: lifts it up, shows a teal crayon ring, enables "Continue" button, fills 4th progress dot. Stores emoji + name in `state.creature` / `state.creatureName`.

Progress dots = 4 diamond squares, first 3 already filled (representing completed earlier steps), 4th fills on creature pick.

### Screen 5 — Story
- **Chapter strip** with torn bottom edge (clip-path)
- **Story box** — white card, `overflow-y:auto`, height clamped to viewport
- **Typewriter engine** — splits text into paragraphs then words; each word is a `<span class="word-span">` with random `--r` CSS var (±2.5°) for wobble; `wordAppear` keyframe does the spring-in
- **story-torn div** — jagged white clip-path strip connecting story box bottom to choices card (appears after typing finishes)
- **Choices card** with torn top edge — two buttons (A and B)
- **Skip link** — shows during typing, calls `skipTyping()` which renders all words instantly

Choice A: "I need to understand this…" → optimistic result message
Choice B: "It's far away…" → sobering result message

Full story text is in the `STORY` template literal constant in JS.

### Screen 6 — Fish bowl
- **Result card** — `splat` animation (scale + rotate spring-in), different text per choice, uses `state.username`
- **Counter** — "N creatures have heard this story" (random 5–9)
- **Bowl** — `border-radius: 12px 12px 88px 88px`, gradient water, glass shine ellipse, sandy bottom strip, sliding wave line
- **Fish entities** — 4 demo fish + user's creature, swim Lissajous figure-8 paths via `requestAnimationFrame`, smooth direction flip via CSS `transition:transform .28s ease` on `.fish-emoji`
- **Bubbles** — spawned by `setInterval` every ~950ms, float up with `bubUp` keyframe, removed after 5s
- Buttons: "↩ Start again" (full reset) and "Share this story 🐠"

## JavaScript architecture

### State object
```javascript
const state = { lang, username, creature, creatureName, choice }
```

### Key functions
| Function | Purpose |
|---|---|
| `goTo(id)` | Screen transition — adds `.crumpling` to current, `.dropping` to next; fires `startStory()` or `initBowl()` on arrival |
| `btnClick(btn, dest)` | Squish animation then navigate — used for main CTA buttons |
| `pickLang(lang, el)` | Set language, trigger card flip animation, navigate |
| `submitName()` | Validate input, store username, navigate |
| `pickCreature(emoji, name, card)` | Toggle selection state, show confirm button |
| `startStory()` | Build `PARTS` array, run typewriter with `setTimeout` chain |
| `skipTyping()` | Cancel timer, render all words instantly, show choices |
| `initBowl()` | Set result message, spawn fish entities, start RAF loop, start bubble interval |
| `restartAll()` | Cancel all timers/RAF, reset state, reset DOM, navigate to S1 |
| `shareStory()` | `navigator.share` → clipboard → `window.prompt` fallback |

### Fish swimming math
Each fish uses a Lissajous curve (figure-8 shape):
```javascript
x = cx + rx * Math.cos(t)
y = cy + ry * Math.sin(2*t + phase) * 0.7
```
Different `rx`, `ry`, `phase`, and `speed` per fish creates natural-looking variety. Fish flip emoji with `scaleX(-1)` when `x < prevX`.

## Common edits

### Change story text
Edit the `STORY` template literal in the `<script>` block. Paragraphs separated by `\n\n` become paragraph breaks. `PARTS` is built from `STORY` at load time.

### Add a new creature option
Copy a `.creature-card` block in S4, change emoji and label. Add `nth-child` CSS rule for its rotation. No JS changes needed.

### Change result messages
In `initBowl()`, edit the `A` and `B` template literals. HTML is supported (`<strong>`, `<br>`).

### Change typewriter speed
In `startStory()`, edit the `setTimeout(next, 72 + Math.random()*62)` values (ms per word) and paragraph pause `260`.

### Change fish bowl colors
Edit the `background: linear-gradient(...)` on `.bowl`. The gradient goes top (light teal) → bottom (deep green).

### Add more demo fish in the bowl
Add objects to `DEMO_FISH` array: `{emoji:'🐙', name:'SomeName'}`. Each gets its own Lissajous path automatically.

## How to run
Open `index.html` directly in any browser — no server needed. Fonts load from Google Fonts CDN (requires internet). Everything else is self-contained.

## Prototype notes
- Language selection is stored but story text doesn't change (English only in prototype)
- Fish counter is random (5–9), not real-time
- "Share" button uses Web Share API with clipboard fallback
- All social/ticket links are `#` placeholders
- The stamp on S1 reads "prototype for team pitch" intentionally
