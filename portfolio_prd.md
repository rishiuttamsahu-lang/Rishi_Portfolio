# Premium Portfolio Website — Product Requirements Document (PRD)

**Project:** Rishikesh Sahu — Premium Developer Portfolio  
**Document:** Product Requirements Document  
**Status:** Ready for implementation  
**Primary stack:** React + Vite + JavaScript/TypeScript-compatible component architecture  
**Core motion:** Lenis + GSAP + ScrollTrigger  
**UI direction:** Premium, minimal, editorial, motion-led, highly polished  

---

## 1. Executive Summary

The goal is to rebuild the existing personal portfolio into a **premium, minimal, highly interactive developer portfolio** that feels closer to a polished creative studio / product designer portfolio than a traditional student resume site.

The website must communicate three things within the first few seconds:

1. **Who Rishikesh is** — a Computer Science student and hands-on builder.
2. **What he builds** — web products, AI tools, automation systems, utilities, and community-focused products.
3. **Why his work is worth exploring** — the projects should feel real, useful, technically interesting, and intentionally crafted.

The design should use the requested blue/lilac palette while keeping the UI visually restrained. Animation is a major part of the experience, but it must support hierarchy rather than become visual noise.

The portfolio should feel:

> **Minimal at rest. Cinematic in motion. Extremely clear in content.**

---

## 2. Source Material Audit — ZIP Review

The supplied ZIP was reviewed at the content/architecture level. It contains an existing portfolio codebase plus project ingests and GitHub profile/project documentation.

### Existing portfolio structure found

- Header / navigation
- Hero
- About
- Skills carousel
- Projects
- Services
- Contact
- Footer

### Existing portfolio implementation signals

The current portfolio already contains:

- React + Vite architecture
- Sticky header with mobile menu
- UnicornStudio-powered hero background
- Flip-card style About image interaction
- Infinite skills icon strip
- Project cards with GitHub and Live Demo links
- Services cards
- Web3Forms contact form
- Social links
- Responsive layout intent

### Existing project/content inventory found

#### Flagship / primary projects

1. **BNN CS Study Hub**
   - Academic/community web platform for Computer Science students
   - React, Tailwind CSS, Firebase/Firestore, Google Auth, Vercel
   - Features include semester-wise resources, practicals, assignments, AI assistance, and analytics
   - Live project available

2. **JARVIS — Autonomous AI Desktop & Voice Agent**
   - Personal AI assistant / desktop automation project
   - Python + TypeScript/React-related UI, AI model integrations, Playwright/browser automation
   - Private / research-oriented project
   - Should be presented as a technical case study rather than as a normal demo card

#### Secondary projects / experiments

3. **ChromaGrab**
   - Privacy-first browser color extraction utility
   - Image/screen color picking and developer-ready color output
   - Strong candidate for a visually impressive interactive project card

4. **Compact Files**
   - Browser-based file compression utility
   - Useful utility/product story with performance/privacy angle

5. **YT DJ Mix**
   - Browser-based audio mixing / playlist experience
   - Strong candidate for showing interaction design, media controls, and custom UI engineering

6. **Telegram Study Bot / materials automation**
   - Educational content distribution automation
   - Good backend/automation project

7. **Siyaram Mitra Mandal**
   - Community/organization digital portal
   - Useful as a product + system architecture case study

8. **Siyaram Invitation**
   - Visual/creative web experience
   - Best treated as an experimental / visual work item rather than a core engineering flagship

9. **Cloudflare / Mandal Bot work**
   - Automation/backend/synchronization work
   - Could appear inside an “Automation & Systems” filter or case-study collection

### Content conclusion

The portfolio should **not** show every project with identical importance.

Use a hierarchy:

- **2 flagship case studies** — BNN CS Study Hub + JARVIS
- **4–6 selected projects** — ChromaGrab, Compact Files, YT DJ Mix, Telegram Study Bot, Siyaram Mitra Mandal, etc.
- **Experimental archive** — visual experiments and smaller utilities

This keeps the homepage editorial and prevents the site from feeling like a GitHub repository dump.

---

## 3. Product Goals

### Primary goals

- Create a memorable premium portfolio experience.
- Showcase strong engineering ability through real projects.
- Make projects the main proof of skill.
- Use motion and interaction as part of the visual language.
- Build a responsive experience from mobile upward, with desktop as the cinematic showcase.
- Make the site fast enough that animations never feel like loading penalties.
- Create reusable components so future projects can be added without redesigning the site.
- Maintain an accessible fallback for users who reduce motion or use low-powered devices.

### Secondary goals

- Improve credibility for internships, collaborations, freelance opportunities, and developer communities.
- Make social/contact conversion obvious without being aggressive.
- Give private projects an intentional “private / R&D” presentation instead of broken links.

### Non-goals

- Turning the site into a full blog/CMS in v1.
- Adding dozens of decorative effects just because they are available.
- Recreating every component from external inspiration libraries.
- Using complex 3D/WebGL everywhere.
- Making the website look like a SaaS dashboard.

---

## 4. Core Brand / Visual System

### 4.1 Primary palette

The supplied palette is the visual foundation:

| Token | Hex | Intended use |
|---|---|---|
| Primary | `#1B4EF5` | Main brand blue, CTA, active states |
| Secondary | `#3874FF` | Interactive blue, gradients, highlights |
| Tertiary | `#5996FF` | Soft glow, supporting accents |
| Accent | `#F4CEFF` | Lilac/pink accent, soft contrast, selected highlights |

### 4.2 Supporting neutrals

Use neutral tones around the requested palette rather than adding many new colors.

Recommended direction:

- Background: near-black / blue-black
- Surface: very dark cool gray
- Elevated surface: slightly lighter neutral-blue gray
- Primary text: off-white
- Secondary text: muted cool gray
- Borders: low-opacity white/blue

The blue/lilac palette should feel like **light through a dark gallery**, not like a saturated gaming UI.

### 4.3 Gradient system

Use restrained gradients such as:

- `#1B4EF5 → #3874FF`
- `#3874FF → #F4CEFF`
- Subtle radial blue glow behind important focal points

Avoid rainbow gradients.

### 4.4 Typography direction

Typography must be one of the primary visual assets.

Recommended style:

- Display: bold contemporary grotesk / geometric sans
- Body: highly readable neutral sans
- Labels / metadata: compact uppercase or small tracking-heavy sans
- Optional mono: only for technical metadata, stack labels, and small system-style details

Type hierarchy should be obvious:

- Hero headline: very large, tight leading
- Section headline: large but substantially smaller than hero
- Project title: medium-large
- Body: comfortable reading width and line height
- Metadata: compact and quiet

Avoid using multiple decorative fonts.

---

## 5. Experience Principles

### Principle 1 — Content first

Every visual effect must clarify hierarchy, reveal context, or improve perceived quality.

### Principle 2 — Motion has rhythm

Animations should feel sequenced rather than random.

Example rhythm:

**enter → settle → reveal → interact → transition**

### Principle 3 — Premium means restraint

Do not animate every card, icon, border, and word simultaneously.

### Principle 4 — Projects are proof

Project storytelling should occupy more visual weight than a generic list of skills/services.

### Principle 5 — Desktop can be cinematic; mobile must stay functional

Desktop can use pinned sections, layered parallax, cursor interactions, and wide compositions. Mobile should simplify those effects instead of shrinking them blindly.

---

## 6. Information Architecture

Recommended single-page architecture:

1. Preloader / entry state
2. Header / navigation
3. Hero
4. Proof strip / current status
5. About / identity
6. Selected work intro
7. Flagship project showcase
8. Selected projects grid / horizontal gallery
9. Capabilities / services
10. Skills / stack marquee
11. Build philosophy / process
12. Contact CTA
13. Footer

Optional future route:

- `/work/:slug` for detailed project case studies

V1 may keep project details on-page through expandable panels/modal transitions, but the architecture should be ready for dedicated routes.

---

# 7. Detailed Section Requirements

## 7.1 Preloader

### Purpose

Create a short brand introduction before the main page settles.

### UI

- Minimal wordmark / monogram
- Small progress indicator or percentage
- Subtle blue/lilac light movement
- No large loading animation

### Behavior

- Only shown on the first meaningful session load.
- Should never block the site for an excessive duration.
- Main content should begin preparing underneath.
- Respect `prefers-reduced-motion`.

### Recommended motion

- Logo fade + clip reveal
- Progress bar scale-x
- Quick blue glow sweep
- Exit via opacity/vertical clip transition

---

## 7.2 Header / Navigation

### Keep from current site

- Brand mark
- Primary section links
- Social links
- Mobile menu

### Redesign

Use a slim floating/sticky navigation with strong spacing.

Desktop:

- Left: `Rishi` wordmark/monogram
- Center: Home / About / Work / Capabilities / Contact
- Right: small social links + availability/status indicator

Mobile:

- Brand on left
- Menu trigger on right
- Full-screen or large floating navigation panel

### Motion

- Header starts transparent.
- On scroll: subtle surface and blur appear.
- Active section indicator moves using a short GSAP tween.
- Menu opens with a clip/scale reveal instead of a generic slide-down.

---

## 7.3 Hero — Signature Section

### Objective

The hero must immediately communicate identity and build quality.

### Suggested content

**Eyebrow:**
`COMPUTER SCIENCE STUDENT · BUILDER · AI & WEB`

**Headline:**
A large, direct statement such as:

> `I build digital experiences, useful systems, and ideas that actually ship.`

**Supporting copy:**
A concise 1–2 line explanation covering web development, AI experimentation, automation, and real-world products.

**Actions:**
- View selected work
- Contact me

**Secondary status:**
`Currently building · Learning · Shipping`

### Visual treatment

Use a dark, minimal hero with:

- Large typography
- Soft blue/lilac atmosphere
- One dominant portrait/product visual
- Very subtle grid or noise texture
- One signature motion element

### Preferred component types from external libraries

Use one or two—not all:

- Split / masked heading reveal
- Text scramble or word rotation
- Magnetic CTA button
- Soft cursor-following glow
- Subtle image parallax
- Decorative orbital/light element

The original UnicornStudio hero can be replaced rather than preserved. The final version should avoid a generic third-party hero feeling.

---

## 7.4 Proof / Signal Strip

Immediately after the hero, add a slim horizontal proof section.

Possible content:

- `Student → Builder`
- `Real projects shipped`
- `AI + Web + Automation`
- `Based in Maharashtra`
- GitHub / Live Projects

Animation:

- Infinite marquee on desktop
- Reduced-motion static strip fallback

This section provides context without requiring a full paragraph.

---

## 7.5 About / Identity Section

### Replace current layout

The current flip-card photo is interesting but should become a more editorial composition.

### Structure

Left:
- Portrait / profile image
- Small metadata tags
- Optional rotating or floating decorative layer

Right:
- `A little about me`
- concise narrative
- current learning/building status
- one personal design/engineering principle

### Interaction

Keep the image flip concept only as an optional micro-interaction—not the primary interaction.

Alternative:

- Image has a subtle depth/parallax movement based on pointer position.
- Secondary image appears on hover/click via layered crossfade.

### Content tone

Confident but not exaggerated. Avoid generic claims such as “expert” unless directly supported.

---

## 7.6 Selected Work Introduction

Use a large editorial section heading:

`Selected Work`

Supporting line:

`A few things I built, shipped, automated, and obsessed over.`

Include a small category filter:

- All
- Web
- AI
- Tools
- Automation
- Experiments

Filters should be progressive enhancement only. Initial content must render without filtering.

---

## 7.7 Flagship Work — BNN CS Study Hub

This should receive the largest project treatment because it combines product design, real users, authentication, data, and educational utility.

### Layout

Large project feature block with:

- Large product screenshot/mockup
- Project title
- One-sentence pitch
- Role / stack
- Feature highlights
- Live button
- Source / showcase status

### Interaction

- Image scale/parallax on scroll
- Text reveals line-by-line
- Mockup can shift slightly against the page background
- CTA has magnetic hover

### Suggested story structure

`Problem → Product → Key features → Technical build → Outcome`

Do not overload the homepage with a full case study. Link to an expanded view.

---

## 7.8 Flagship Work — JARVIS

JARVIS should be presented as an R&D / systems project.

### Visual concept

Use a horizontally scrolling or pinned technical showcase.

Possible narrative cards:

- Voice interaction
- Browser automation
- System actions
- Research / orchestration
- AI model integration

### Important

Because the project is private, never present non-public access as a broken live link. Use:

`Private R&D · Case Study`

rather than `Live Demo`.

---

## 7.9 Selected Projects Grid

Recommended cards:

- ChromaGrab
- Compact Files
- YT DJ Mix
- Telegram Study Bot
- Siyaram Mitra Mandal
- One rotating experimental project

### Card system

Each card contains:

- Image/video preview
- Category
- Title
- Short description
- Stack
- Small action arrow

### Motion

- Image zoom on hover
- Slight translation/parallax
- Cursor-following label or arrow
- Text remains stable enough to read

Avoid extreme tilt effects on every card.

---

## 7.10 Capabilities / Services

The current Services section is useful but too generic.

Replace it with capability categories:

### Web Experiences

Modern front-end and full-stack web applications with responsive interaction.

### AI & Automation

AI-assisted utilities, agents, workflow automation, and experimental tools.

### Product Interfaces

Interactive UI systems, design-to-code implementation, and polished web experiences.

### Systems Thinking

Authentication, data flows, APIs, automation pipelines, and application architecture.

### Visual format

Prefer a large list / stacked row layout over three identical cards.

Each row can reveal additional detail on hover/scroll.

---

## 7.11 Skills / Tech Stack

The current infinite icon carousel should be retained conceptually but redesigned.

### Structure

Primary categories:

- Frontend
- Backend / Cloud
- AI / Automation
- Tools / Workflow

### Visual treatment

A typography-led marquee is preferred over a wall of logos.

Example:

`React · Next.js · JavaScript · Tailwind · Firebase · Supabase · Python · Playwright · Git · Figma · Vercel`

Icons may accompany the text, but icons should not become the only information.

### Motion

- Slow, smooth horizontal movement
- Direction can reverse between rows
- Pause / reduce motion when appropriate

---

## 7.12 Build Philosophy / Process

Add a short section to answer:

`How I like to build.`

Suggested steps:

01 — Idea  
02 — Prototype  
03 — Build  
04 — Refine  
05 — Ship

### Animation

Use a pinned vertical process timeline or scroll-driven reveal.

Each step activates as the user scrolls.

This demonstrates engineering thinking without adding résumé-like content.

---

## 7.13 Contact CTA

The final CTA should feel like a conclusion rather than a normal form section.

### Large statement

Examples:

`Have an idea worth building?`

or

`Let’s make something useful.`

### Actions

- Email me
- LinkedIn
- GitHub

### Form

A compact form may remain available, but should be secondary to direct contact links.

### Important implementation change

The existing Web3Forms key is embedded in client-side code. The rebuilt project must not hardcode private form credentials/secrets in source code. Use environment configuration/serverless handling where appropriate.

---

## 7.14 Footer

Minimal footer containing:

- Name / monogram
- Current year
- Social links
- Small navigation
- Optional “Back to top” control

### Motion

Back-to-top control can use a circular progress indicator based on scroll progress.

---

# 8. Component Usage Map

The implementation should treat external component libraries as an **ingredient library**, not as the design system.

## React Bits-style components — preferred usage

Use motion-heavy components where they create a signature moment:

| Component type | Portfolio usage |
|---|---|
| Text reveal | Hero headline, section titles |
| Scroll reveal | About, project descriptions |
| Text scramble / variable text | Small hero accent only |
| Magnetic button | Primary CTA buttons |
| Pixel / image reveal | Project image entry |
| Parallax cards | Selected work, limited use |
| Infinite marquee | Proof strip + skill stack |
| Custom/smooth cursor | Desktop only, subtle |
| Gradient / mesh background | Hero only |
| Noise / texture | Global atmosphere, very low opacity |

## 21st.dev-style / shadcn-compatible components — preferred usage

Use clean structural components for:

- Navbar
- Buttons
- Badges
- Cards
- Tabs / filters
- Tooltips
- Dialog/modal for project detail
- Section containers
- Form controls
- Accessibility-friendly interactions

The final visual language must unify these copied components through shared tokens for color, typography, radius, border, shadow, spacing, and motion.

---

# 9. Keep / Transform / Drop Matrix

| Existing element | Decision | Reason |
|---|---|---|
| Sticky Header | **Keep + redesign** | Core navigation is useful |
| UnicornStudio hero | **Replace** | Too dependent on external visual identity |
| Hero CTA | **Keep + upgrade** | Conversion remains important |
| Flip-card About image | **Transform** | Keep the idea, make it subtler |
| Skills infinite slider | **Keep + redesign** | Strong motion opportunity |
| Basic project cards | **Replace** | Need stronger storytelling |
| Services cards | **Transform** | Convert to capability rows |
| Contact form | **Keep + secure** | Useful, but credential handling must improve |
| Footer social links | **Keep** | Useful and lightweight |
| CSS-only smooth scroll | **Replace** | Lenis + GSAP becomes the motion foundation |

---

# 10. Motion System

## 10.1 Motion goals

Motion should communicate:

- hierarchy
- continuity
- depth
- responsiveness
- transition between content states

It should not communicate:

- complexity for its own sake
- constant movement
- “tech demo” overload

## 10.2 Global motion stack

### Lenis

Use Lenis as the main smooth-scroll layer.

Responsibilities:

- smooth wheel/touch interpolation
- global scroll feel
- shared scroll progress source

### GSAP + ScrollTrigger

Use GSAP for deterministic animation sequences and ScrollTrigger for viewport/scroll-linked orchestration.

Responsibilities:

- section reveals
- pinned storytelling
- scrubbed transforms
- image parallax
- horizontal sections
- progress indicators
- route/page transitions if later required

### Performance rule

Never create unnecessary scroll listeners for effects that can be driven through the central animation loop.

---

# 11. Lenis + GSAP Architecture

Recommended conceptual structure:

```text
App
 ├─ SmoothScrollProvider
 │   ├─ Lenis instance
 │   └─ GSAP ticker bridge
 │
 ├─ Header
 ├─ Page
 │   ├─ Hero
 │   ├─ ProofStrip
 │   ├─ About
 │   ├─ FeaturedWork
 │   ├─ ProjectGrid
 │   ├─ Capabilities
 │   ├─ SkillsMarquee
 │   ├─ Process
 │   ├─ Contact
 │   └─ Footer
 │
 └─ Motion utilities
     ├─ reveal
     ├─ parallax
     ├─ textSplit
     ├─ horizontalScroll
     └─ magnetic
```

### GSAP rules

- Register required plugins once.
- Scope animations per component.
- Clean up ScrollTriggers on unmount.
- Avoid layout-dependent measurements inside every frame.
- Prefer transforms and opacity over expensive layout changes.
- Use responsive breakpoints for animation complexity.

---

# 12. Scroll Experience Specification

The site must feel notably smoother than native browser scrolling while still remaining intuitive.

## Scroll behaviors

### A. Smooth base scroll

Lenis controls the primary scroll interpolation.

### B. Section reveal

Elements fade/translate into view with staggered timing.

### C. Parallax

Use layered movement for:

- hero visual
- project imagery
- decorative background objects
- selected editorial elements

### D. Pinned storytelling

Use only for:

- JARVIS story
- Build process
- Possibly one flagship case-study sequence

### E. Horizontal scroll

At most one major horizontal-scroll experience on the homepage.

### F. Scroll progress

Show a very subtle global progress line or footer progress control.

### G. Velocity response

Optional micro-effects can react to scroll velocity, but should be subtle and disabled on low-power/mobile contexts.

---

# 13. Interaction Details

## Buttons

Primary button:

- rounded but not overly pill-shaped
- blue fill or blue gradient
- small directional arrow
- magnetic hover on desktop
- tactile press state

Secondary button:

- transparent or subtle border
- hover glow / border transition

## Project cards

Hover sequence:

1. image begins subtle zoom
2. arrow shifts
3. accent text changes position slightly
4. card elevation increases minimally

No excessive 3D tilt.

## Navigation

- active link indicator
- scroll-aware state
- smooth anchor movement
- menu closes on navigation

---

# 14. Responsive Requirements

## Desktop

Target:

- Wide editorial layouts
- large type
- parallax
- pinned sections
- custom cursor if enabled
- richer hover states

## Tablet

- Reduce effect intensity
- Simplify multi-column sections
- Maintain visual hierarchy

## Mobile

- Single-column flow
- no heavy custom cursor
- reduced/removed hover-only interactions
- simpler parallax
- no fragile horizontal overflow
- readable type and comfortable touch targets

### Mobile priority order

1. readability
2. navigation
3. project browsing
4. contact
5. decorative motion

---

# 15. Accessibility

Required:

- semantic section/heading structure
- keyboard-accessible navigation and controls
- visible focus states
- sufficient contrast
- alt text for meaningful images
- decorative images marked appropriately
- form labels / accessible validation
- no interaction that depends only on hover
- `prefers-reduced-motion` support

Reduced-motion mode should:

- disable smooth scrolling or minimize interpolation
- remove pinned/parallax effects
- keep opacity/short transitions where useful
- render the full content in a stable layout

---

# 16. Performance Requirements

The premium visual layer must not create a slow site.

### Requirements

- Lazy-load project imagery below the fold.
- Use responsive image sizes.
- Avoid loading large 3D/WebGL assets until necessary.
- Keep hero assets optimized.
- Animate transforms/opacity where possible.
- Limit simultaneous ScrollTriggers.
- Avoid large DOM trees for visual effects.
- Defer non-critical third-party scripts.
- Do not use multiple background animation engines for the same section.

### Performance philosophy

**One excellent animation is better than five average animations.**

---

# 17. SEO / Metadata

### Title

Recommended pattern:

`Rishikesh Sahu — Computer Science Student & Builder`

### Description

The description should mention:

- Computer Science
- web development
- AI/automation
- selected projects

### Technical SEO

- semantic HTML
- canonical URL
- sitemap
- robots.txt
- Open Graph metadata
- Twitter/X card metadata
- meaningful image alt text
- structured metadata where appropriate

The existing project already contains `robots.txt`, `sitemap.xml`, and `site.webmanifest`; these should be retained and updated for the new canonical deployment.

---

# 18. Project Data Model

Projects should not be hardcoded directly into card JSX.

Recommended data structure:

```js
{
  slug: "bnn-cs-study-hub",
  title: "BNN CS Study Hub",
  category: "Web",
  status: "Live",
  year: "2026",
  featured: true,
  private: false,
  summary: "...",
  description: "...",
  image: "/projects/bnn-study-hub.webp",
  technologies: ["React", "Tailwind", "Firebase"],
  liveUrl: "...",
  sourceUrl: "...",
  highlights: [
    "...",
    "...",
    "..."
  ]
}
```

This makes it easy to add future projects without editing page layout code.

---

# 19. Suggested Homepage Project Order

### Feature 01
**BNN CS Study Hub**  
Reason: strongest combination of real product utility + full-stack engineering.

### Feature 02
**JARVIS**  
Reason: strongest AI/automation story and technical differentiation.

### Project 03
**ChromaGrab**  
Reason: visual utility with strong interaction/design potential.

### Project 04
**Compact Files**  
Reason: practical browser utility and privacy/performance angle.

### Project 05
**YT DJ Mix**  
Reason: demonstrates media interaction and non-standard UI engineering.

### Project 06
**Siyaram Mitra Mandal**  
Reason: shows real-world portal/system thinking.

### Project 07
**Telegram Study Bot**  
Reason: automation/backend credibility.

### Experimental archive
Use smaller projects and creative invitation work here.

---

# 20. Content & Copy Direction

The voice should be:

- direct
- calm
- technically aware
- curious
- human
- confident without being boastful

Avoid:

- “guru” language
- empty startup clichés
- excessive buzzwords
- generic “I am passionate about coding” paragraphs
- fake metrics
- unsupported claims such as “world-class” or “expert”

Every project description should answer:

**What is it? Why did I build it? What makes it interesting?**

---

# 21. Visual Spacing System

Use a consistent spacing scale rather than arbitrary margins.

Recommended conceptual scale:

- `xs` — 4px
- `sm` — 8px
- `md` — 16px
- `lg` — 24px
- `xl` — 40px
- `2xl` — 64px
- `3xl` — 96px
- `4xl` — 128px+

Section padding should increase responsively.

Desktop sections should feel spacious.

Do not compensate for poor hierarchy with oversized whitespace everywhere.

---

# 22. Border / Radius / Shadow Language

### Radius

Use one coherent radius family:

- small controls: 10–12px
- cards: 18–24px
- large media: 24–32px

### Borders

Use subtle, low-opacity borders rather than heavy outlines.

### Shadows

Use soft depth only where required. Prefer atmospheric glow over generic card shadows.

---

# 23. Recommended Component Architecture

```text
src/
├── app/
│   ├── App.jsx
│   └── routes.js
│
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Section.jsx
│   │
│   ├── navigation/
│   │   ├── DesktopNav.jsx
│   │   ├── MobileNav.jsx
│   │   └── ScrollProgress.jsx
│   │
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   ├── MagneticButton.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ProjectDialog.jsx
│   │
│   ├── motion/
│   │   ├── SmoothScrollProvider.jsx
│   │   ├── Reveal.jsx
│   │   ├── Parallax.jsx
│   │   ├── TextReveal.jsx
│   │   └── HorizontalScroll.jsx
│   │
│   └── effects/
│       ├── AmbientGlow.jsx
│       ├── NoiseOverlay.jsx
│       └── Cursor.jsx
│
├── sections/
│   ├── Hero/
│   ├── ProofStrip/
│   ├── About/
│   ├── SelectedWork/
│   ├── Capabilities/
│   ├── Skills/
│   ├── Process/
│   ├── Contact/
│   └── Footer/
│
├── data/
│   ├── projects.js
│   ├── skills.js
│   └── social.js
│
├── hooks/
│   ├── useMediaQuery.js
│   ├── useReducedMotion.js
│   └── useScrollProgress.js
│
├── styles/
│   ├── tokens.css
│   ├── typography.css
│   └── globals.css
│
└── assets/
    └── projects/
```

---

# 24. Technical Stack Recommendation

### Required

- React
- Vite
- Lenis
- GSAP
- GSAP ScrollTrigger

### UI / components

- React Bits-inspired/copyable animated components where useful
- 21st.dev/shadcn-style components for structural UI
- React Icons or a consistent SVG icon strategy

### Optional

- Framer Motion only when a specific component interaction is simpler with it; avoid running two animation paradigms unnecessarily.
- Three.js/WebGL only for a single controlled hero/visual experiment if it materially improves the experience.

### Avoid

- multiple smooth-scroll libraries
- multiple competing animation frameworks for the same effects
- unnecessary UI component packages that introduce duplicate design languages

---

# 25. Security / Repository Hygiene

The supplied ZIP includes project ingests that contain credential-like material and service-account/private-key content.

Before using any source from the ZIP in a public portfolio repository:

1. Remove all private keys, bot tokens, API secrets, refresh tokens, service-account JSON files, and credential files.
2. Rotate credentials that may have been exposed in the archive.
3. Add appropriate patterns to `.gitignore`.
4. Use `.env` / environment configuration for non-public runtime settings.
5. Never place secret keys inside React client bundles.
6. Replace any exposed client-side form/service credentials with a safe serverless/API pattern where appropriate.

The portfolio should only contain **public project metadata and public demo URLs**.

---

# 26. Analytics / Optional Telemetry

Optional and lightweight:

- page views
- project clicks
- contact CTA clicks
- outbound link clicks

Avoid intrusive cookie banners unless required by the selected analytics stack/legal context.

Do not add analytics until the core experience is stable.

---

# 27. Acceptance Criteria

The portfolio is considered complete when:

### Visual

- [ ] The blue/lilac palette is consistent throughout the site.
- [ ] Typography has a clear display/body hierarchy.
- [ ] Spacing feels intentional and consistent.
- [ ] No section looks like an unrelated template.
- [ ] Cards, buttons, borders, and radii use a coherent visual system.

### Motion

- [ ] Lenis smooth scrolling is active.
- [ ] GSAP and ScrollTrigger drive scroll-linked animations.
- [ ] At least one strong hero reveal exists.
- [ ] At least one meaningful parallax treatment exists.
- [ ] At least one pinned/scroll-story section exists.
- [ ] Hover interactions feel responsive but restrained.
- [ ] Reduced-motion mode works.

### Content

- [ ] BNN CS Study Hub is a flagship project.
- [ ] JARVIS is presented as a private/R&D project.
- [ ] At least four other projects are showcased.
- [ ] Project data is centralized.
- [ ] All links are verified.

### Engineering

- [ ] Responsive from mobile to large desktop.
- [ ] No hydration/runtime errors.
- [ ] Scroll-trigger cleanup is implemented.
- [ ] Images are optimized.
- [ ] No exposed secrets.
- [ ] SEO metadata is configured.
- [ ] Keyboard navigation works.
- [ ] Production build passes cleanly.

---

# 28. Implementation Phases

## Phase 1 — Foundation

- Set up project structure
- Add design tokens
- Add typography
- Configure global layout
- Add project data model

## Phase 2 — Navigation + Smooth Scroll

- Header
- Mobile navigation
- Lenis provider
- GSAP ticker integration
- anchor navigation

## Phase 3 — Hero

- hero layout
- typography reveal
- CTA interactions
- ambient background
- initial parallax

## Phase 4 — About + Proof

- proof strip
- About composition
- portrait interaction
- reveal animations

## Phase 5 — Flagship Work

- BNN feature section
- JARVIS R&D section
- pinned/scroll story
- project transitions

## Phase 6 — Project System

- project cards
- filters
- image interactions
- project detail modal/route

## Phase 7 — Capabilities + Skills

- capability rows
- skills marquee
- supporting motion

## Phase 8 — Process

- scroll-driven timeline
- interaction polish

## Phase 9 — Contact + Footer

- CTA
- contact handling
- social links
- footer progress

## Phase 10 — Responsive + Accessibility

- mobile simplification
- reduced-motion mode
- keyboard navigation
- contrast and alt text audit

## Phase 11 — Performance

- image optimization
- lazy loading
- animation profiling
- script cleanup

## Phase 12 — Final Polish

- spacing audit
- typography audit
- animation timing audit
- link verification
- SEO metadata
- production build

---

# 29. Definition of Done

The final website should make a visitor think:

> “This person actually builds things—and the website itself proves it.”

The site should feel closer to a **premium creative engineering portfolio** than a standard developer template.

The visual signature should come from the combination of:

**strong typography + generous spacing + blue/lilac atmosphere + carefully choreographed motion + project storytelling.**

The implementation should use external animated components selectively, then normalize them into one cohesive design system.

---

# 30. Final Design Direction

### The experience in one sentence

**A dark editorial portfolio where cobalt-blue light, oversized typography, smooth Lenis scrolling, GSAP-driven storytelling, and carefully chosen interactive components turn real engineering projects into a cinematic showcase.**

### Priority order

1. Content hierarchy
2. Typography
3. Spacing
4. Project presentation
5. Scroll experience
6. Micro-interactions
7. Decorative effects

Never reverse this order.
