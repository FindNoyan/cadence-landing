# Cadence — SaaS Landing Page

A marketing landing page for "Cadence", a demo scheduling-automation
product. Built with plain HTML, CSS, and a touch of JavaScript — no
build step required.

Live demo: https://cadence.findnoyan.me

Cadence is a demo product — the page showcases landing page design and
front-end development. It is not a real booking service: the signup form
sends nothing itself (see below).

## Features

- **Hero with a calendar mock** — a "This week" calendar preview; the
  Tuesday slot ("Design review · 2:00pm") fades in shortly after load.
- **How it works** — three steps: share one link, Cadence finds the
  overlap across everyone's real calendar (time zones handled
  automatically), and the meeting is booked onto every calendar.
- **Calendar integrations** — works with Google Calendar and Outlook;
  guests need to install nothing.
- **Pricing** — Free ($0: one calendar, unlimited bookings, no card
  required) and Team ($8/user/mo: shared availability, round-robin
  routing, priority support), each with an included-features list.
- **FAQ** — five questions answered from the page's own copy, as a
  native `<details>`/`<summary>` accordion (no JavaScript needed),
  mirrored in FAQPage structured data.
- **Signup form** — name + email with inline validation and a success
  state. Demo behaviour: the page itself sends nothing; a valid submit
  opens the visitor's mail app with a prefilled signup message, and a
  mailto link is offered as a fallback.
- **SEO + social meta** — description, author, robots, theme-color,
  favicon, Open Graph + Twitter card tags, and JSON-LD
  (`SoftwareApplication` with both plans as offers, plus `FAQPage`).
- **Accessibility** — skip-to-content link, labelled nav
  (`aria-label="Primary"`), labelled sections (`aria-labelledby`), and
  visible `:focus-visible` outlines on links, buttons, inputs, and FAQ
  summaries.
- **Responsive** — at 780px and below the nav wraps into two rows
  (logo + button on top, links below); hero, feature, and pricing
  sections reflow to a single column.

## Project structure

```
cadence-landing/
├── index.html          # All page markup: nav, hero, how-it-works,
│                       # feature, pricing, FAQ, signup form, footer
├── favicon.svg         # Brand mark — indigo rounded square, white "C"
├── css/
│   └── style.css       # All styles (CSS variables, 780px breakpoint,
│                       # prefers-reduced-motion rule)
├── js/
│   └── script.js       # Calendar slot fade-in + signup form validation
└── README.md
```

## Preview it

Open `index.html` directly in a browser, or serve the folder with any
static server:

```bash
npx serve .
```

Then open http://localhost:3000.

## Screenshots

None yet — capture the hero and pricing sections and add them here
once taken.

## Deploy

Works as-is on GitHub Pages, Netlify, or Vercel — no build command
needed, just point the host at this folder.
