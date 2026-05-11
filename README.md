# Gin & Phonics

Select a subject — purpose, courage, grief — and receive a poem or excerpt paired with a cocktail or non-alcoholic beverage.

## Project Structure

```
gin-and-phonics/
├── public/                     # Static assets
│   ├── favicon.svg
│   └── transparent-logo.png
├── src/
│   ├── assets/
│   │   └── images/             # Bundled images (Vite fingerprints these)
│   │       ├── content-page-background-desktop.png
│   │       ├── content-page-background-mobile.png
│   │       ├── landing-page-cocktail.jpg
│   │       ├── lp-bookstore-composite-m.png
│   │       ├── lp-bookstore-composite.png
│   │       ├── lp-bookstore.JPG
│   │       ├── lp-ex-libris.png
│   │       ├── lp-polaroid.png
│   │       └── red-arrow-icon.png
│   ├── components/             # Presentation layer
│   │   ├── Citation.jsx        # Source attribution for passages
│   │   ├── ContentSection.jsx  # Two-column passage + recipe layout
│   │   ├── EmptyState.jsx      # Initial state before selection
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Header.jsx          # Masthead / site title
│   │   ├── LandingPage.jsx     # Full-screen welcome screen with CTA
│   │   ├── PassageDisplay.jsx  # Renders a single passage with citation
│   │   ├── RecipeCard.jsx      # Renders a recipe with source
│   │   └── TagSelector.jsx     # Dropdown to pick a subject
│   ├── data/                   # Data layer (pure JS, no framework deps)
│   │   ├── constants.js        # Tag display labels
│   │   ├── passages.js         # All passages keyed by theme
│   │   └── recipes.js          # Cocktail/beverage recipes keyed by tag
│   ├── hooks/                  # Functionality layer (React logic)
│   │   └── usePassageSelection.js  # State + actions for tag/passage/recipe
│   ├── styles/                 # Per-component CSS (BEM naming, CSS custom properties)
│   │   ├── Citation.css
│   │   ├── ContentSection.css
│   │   ├── global.css          # Resets, custom properties, font declarations
│   │   ├── Header.css
│   │   ├── LandingPage.css
│   │   ├── Layout.css
│   │   ├── PassageDisplay.css
│   │   ├── RecipeCard.css
│   │   └── TagSelector.css
│   ├── utils/                  # Pure functions (no React)
│   │   └── passages.js         # Tag extraction, random passage, recipe lookup
│   ├── App.jsx                 # Root component
│   └── main.jsx                # ReactDOM entry point
├── CHANGELOG.md
├── index.html                  # Vite HTML entry
├── netlify.toml                # Netlify SPA redirect config
├── package.json
└── vite.config.js
```

## Architecture

| Layer | Directory | Responsibility |
|-------|-----------|----------------|
| **Data** | `src/data/` | Raw content — passages, recipes, constants. No framework imports. |
| **Utils** | `src/utils/` | Pure functions that query/transform data. No React. |
| **Hooks** | `src/hooks/` | React state management and side effects. |
| **Components** | `src/components/` | Presentational React components. Each imports only its own CSS. |
| **Styles** | `src/styles/` | One CSS file per component, plus `global.css` for variables & resets. |

## Getting Started

```bash
npm install
npm run dev       # Local dev server at http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
```

## Deploy to Netlify

1. Push this repo to GitHub/GitLab/Bitbucket
2. In Netlify → "Add new site" → "Import an existing project"
3. Settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy

Or drag-and-drop the `dist/` folder at [app.netlify.com/drop](https://app.netlify.com/drop).

## Typography

Fonts are declared via `@font-face` in `src/styles/global.css`:

- **EB Garamond** — passages, titles, decorative headings (Fontsource CDN)
- **JetBrains Mono** — UI elements, tags, labels (Fontsource CDN)
- **biroscript-regularus** — decorative handwritten accents (local `/fonts/`)

## Design

- Background: white (`#ffffff`)
- Ink / font color: `#000000`
- Accent: vermillion (`#C8402D`)
- Secondary accent: mustard (`#D4982A`)
- Handwritten accent: pen-red (`#DB0424`)
- Responsive: single-column below 680px
