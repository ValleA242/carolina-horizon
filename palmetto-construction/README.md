# Palmetto Construction — Website

Single-page marketing site for Palmetto Construction (Excavation · Grading · Outdoor Solutions), Myrtle Beach, SC.

## Stack
Plain HTML + CSS + vanilla JS. No build step. One small React island powers the optional Tweaks panel (loaded from CDN).

## Files
```
index.html          Page markup (all sections)
styles.css          Design system + all component styles
app.js              Nav, hero carousel, testimonials, stat counters, form
image-slot.js       <image-slot> web component (drag-and-drop photo placeholders)
tweaks-panel.jsx    Tweaks panel shell (React, optional)
tweaks.jsx          Wires the design tweaks to the page
assets/
  palmetto-logo.png Logo with transparent background
```

## Run
Serve the folder with any static server, e.g.:
```
npx serve .
# or
python3 -m http.server
```
Then open the printed URL. (Opening index.html directly via file:// also works, though the photo-slot persistence and CDN fonts need http.)

## Fonts & icons (CDN)
- Google Fonts: Oswald, Zilla Slab, Barlow
- Lucide icons (`https://unpkg.com/lucide@latest`)
For fully offline use, self-host these.

## Brand palette
| Token | Hex | Use |
|------|------|-----|
| Navy | `#1A2744` | nav, footer, dark sections |
| Cream | `#F2ECD8` | page background |
| Brick | `#8B2020` | buttons / CTAs |
| Gold | `#C9922A` | accents, highlights |
| Charcoal | `#1C1C1C` | body text, dark form section |
| Stone | `#6B6560` | secondary text |

## Photos
Every grey-striped area is an `<image-slot>`. Drag an image onto it (or click to browse); the choice persists in a `.image-slots.state.json` sidecar. Each slot has a unique `id` — keep them when editing.

## Placeholder content to replace
Phone, email, address, hours, SC license #, stats, and testimonials are realistic placeholders — search/replace with the real values.

## Tweaks panel
Optional. Toggles heading font, hero overlay color, gold accent intensity, and the weathered texture. Driven by `data-*` attributes on `<html>` (see top of `styles.css`). Remove the React `<script>` tags + `#tweaks-root` at the bottom of `index.html` to drop it entirely.
