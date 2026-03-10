# Gin & Phonics

Select a subject — purpose, courage, grief — and receive a poem or excerpt paired with a cocktail or non-alcoholic beverage.

## Project Structure

```
passages-and-pours/
├── public/                     # Static assets
│   └── favicon.svg
├── src/
│   ├── components/             # Presentation layer
│   │   ├── Citation.jsx        # Source attribution for passages
│   │   ├── ContentSection.jsx  # Two-column passage + recipe layout
│   │   ├── EmptyState.jsx      # Initial state before selection
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Header.jsx          # Masthead / site title
│   │   ├── PassageDisplay.jsx  # Renders a single passage with citation
│   │   ├── RecipeCard.jsx      # Renders a recipe with source
│   │   └── TagSelector.jsx     # Dropdown to pick a subject
│   ├── data/                   # Data layer (pure JS, no framework deps)
│   │   ├── constants.js        # Tag display labels
│   │   ├── passages.js         # All passages from the spreadsheet
│   │   └── recipes.js          # Cocktail/beverage recipes keyed by tag
│   ├── hooks/                  # Functionality layer (React logic)
│   │   └── usePassageSelection.js  # State + actions for tag/passage/recipe
│   ├── styles/                 # CSS modules (BEM naming, CSS custom properties)
│   │   ├── Citation.css
│   │   ├── ContentSection.css
│   │   ├── global.css          # Resets, custom properties, @font-face
│   │   ├── Header.css
│   │   ├── Layout.css
│   │   ├── PassageDisplay.css
│   │   ├── RecipeCard.css
│   │   └── TagSelector.css
│   ├── utils/                  # Pure functions (no React)
│   │   └── passages.js         # Tag extraction, random passage, recipe lookup
│   ├── App.jsx                 # Root component
│   └── main.jsx                # ReactDOM entry point
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

The serif body font is configured with `@font-face` to use Cheltenham when installed locally, falling back to Georgia → Palatino. To use a web font version, replace the `@font-face` rule in `src/styles/global.css` with the appropriate `@import` or `<link>` tag.

## Design

- Background: white (`#ffffff`)
- Ink / font color: `#054A91`
- Serif: Cheltenham → Georgia → Palatino
- Sans: Gill Sans → Calibri → Trebuchet MS
- Responsive: single-column below 680px
