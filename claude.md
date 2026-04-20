# Zyrtec Website — Project Brief for Claude

## Project Overview

Create a **professional, responsive marketing website** for **Zyrtec** (cetirizine hydrochloride) — an antihistamine allergy relief brand. The site should feel pharmaceutical-grade: clean, trustworthy, and modern, while remaining approachable and patient-friendly.

---

## Design System

Implement this design from Figma.
@https://www.figma.com/design/V5H9dBbMHFi4fyOAauxE9I/Zyrtec-Microsite--Brand-Related-?node-id=2-2&m=dev

### Typography

```css
font-family: Arial, Helvetica, sans-serif;
```

Use **Arial** as the primary typeface throughout the site. Fall back to `Helvetica`, then `sans-serif`. Apply consistent typographic hierarchy:

- **H1**: Bold, large, used for hero headlines
- **H2**: Semi-bold, section titles
- **H3**: Medium, card/feature titles
- **Body**: Regular weight, comfortable line-height (~1.6)

### Color Palette

| Name        | Hex       | Usage                                     |
| ----------- | --------- | ----------------------------------------- |
| Lemon       | `#92CC3F` | Accents, CTAs, highlights, badges, icons  |
| Blue        | `#3D518C` | Dark backgrounds, footer, headings, nav   |
| Zyrtec Blue | `#0689D1` | Primary brand color, buttons, links, hero |
| White       | `#FFFFFF` | Backgrounds, card surfaces, text on dark  |
| Light Gray  | `#F5F7FA` | Section alternating backgrounds           |

Define these as CSS custom properties:

```css
:root {
  --color-lemon: #92cc3f;
  --color-blue: #3d518c;
  --color-zyrtec-blue: #0689d1;
  --color-white: #ffffff;
  --color-light-gray: #f5f7fa;
  --font-family: Arial, Helvetica, sans-serif;
}
```

---

## Technology Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, flexbox, grid
- **Bootstrap 5** — grid system, responsive utilities, components
- **Vanilla JavaScript** — interactions, smooth scroll, navbar behavior

> **Mobile-first approach** using Bootstrap's responsive breakpoints:
> `xs (< 576px)` → `sm (≥ 576px)` → `md (≥ 768px)` → `lg (≥ 992px)` → `xl (≥ 1200px)`

---

## Site Structure

```
index.html
├── <nav>          Navigation bar (logo + links + CTA button)
├── <section>      Hero — headline, subtext, CTA, product image
├── <section>      How It Works — 3-step process cards
├── <section>      Symptoms — allergy symptom icons grid
├── <section>      Product Range — product cards (24hr, Children's, etc.)
├── <section>      Why Zyrtec — benefits / comparison table
├── <section>      FAQ — accordion-style questions
└── <footer>       Links, legal disclaimer, copyright
```

---

## Assets

All images and visual assets are stored in the `/assets/` folder:

```
assets/
├── logo.png              ← Zyrtec brand logo
├── video-thumb.png      ← video thumb img
├── about-icon.png      ← about icon
├── dosing-icon.png      ← dosing icon
└── bg-hero.jpg           ← Hero background image
```

> **Rule:** Never use external image URLs. Always reference images from `./assets/filename`.  
> If an asset is unavailable, use a styled placeholder `<div>` with background color and dimensions.

---

## Component Specifications

### Navbar

- Sticky top, white background with `box-shadow` on scroll
- Zyrtec logo (left), navigation links (center/right)
- "Find Relief" CTA button — `background: var(--color-zyrtec-blue)`, white text, rounded pill
- Collapses to hamburger menu on mobile (`navbar-toggler`)

### Hero Section

- Full-width, min-height `100vh`
- Background: or hero image with overlay

### CTA Buttons

```css
.btn-zyrtec {
  background-color: var(--color-zyrtec-blue);
  color: #fff;
  border-radius: 50px;
  padding: 12px 28px;
  font-weight: 600;
}

.btn-lemon {
  background-color: var(--color-lemon);
  color: #fff;
  border-radius: 50px;
  padding: 12px 28px;
  font-weight: 600;
}
```

### Footer

- Dark background: `var(--color-lemon)`
- White text, lemon accent for links on hover
- Three columns: Brand info | Quick Links | Legal
- Bottom strip: copyright + legal disclaimer in small text

---

## Responsive Behavior

| Element        | Mobile               | Tablet    | Desktop         |
| -------------- | -------------------- | --------- | --------------- |
| Navbar         | Collapsed hamburger  | Collapsed | Full horizontal |
| Hero layout    | Stacked (text→image) | Stacked   | Side by side    |
| Product cards  | 1 per row            | 2 per row | 3 per row       |
| Symptom icons  | 2 per row            | 3 per row | 6 per row       |
| Footer columns | Stacked              | 2 columns | 3 columns       |

---

## Content Guidelines

- Tone: **Professional, reassuring, accessible** — not overly clinical
- Headlines: Short, benefit-driven (e.g., "24-Hour Allergy Relief. One Tablet.")
- Body copy: Clear, jargon-free, empathetic
- Always include: **legal disclaimer** at the bottom ("Always read the label...")
- Do **not** make specific medical claims beyond approved brand language

---

## Coding Standards

- Use **semantic HTML5** elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- All CSS variables defined in `:root`
- No inline styles — use classes
- Bootstrap classes preferred for layout; custom CSS for brand overrides
- Add `alt` text to all `<img>` tags
- External fonts loaded via Google Fonts or `@font-face` if Myriad Pro is unavailable

---

## Output

The final deliverable is a single file:

```
index.html
```

Self-contained with:

- Embedded `<style>` block (or linked `style.css`)
- Bootstrap 5 loaded via CDN
- All images referenced from `./assets/`
- No build tools required — open directly in browser

---

_Zyrtec® is a registered trademark of Kenvue. This brief is for development/design purposes._
