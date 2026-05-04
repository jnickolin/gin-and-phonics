# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog] (https://keepachangelog.com/en/1.1.0), and this project adheres to [Semantic Versioning] (https://semver.org/spec/v2.0.0.html)

## [Unreleased]

- Added handling to 'anotha one' button for when all passages in selected category have been shown - called "barrel is kicked"
- Added back button so they can see the other passages they've gotten
- Hyperlinked logo to landing page

## [0.0.8] - 2026-05-04

### Changed

- Set default font size in global.css & updated all font-size attribute values to rem to improve accessibility
- Enlarged font sizes in all files (except LandingPage.css) by 12% to improve readability

## [0.0.7] - 2026-05-03

### Changed

- Added explicit permission to workflow in [.github/workflows/release.yml] to create releases
- Updated actions/checkout to v4.2.2 in [.github/workflows/release.yml] to support Node 24

## [0.0.6] - 2026-05-03

### Changed

- Fixed syntax in [release.yml], removed leading spaces so name:, on:, and jobs are all at column 0

## [0.0.5] - 2026-05-03

### Added

- Created github action [.github/workflows/release.yml] to auto-publish release notes from changelog

### Changed

- Updated README.md to reflect project tree and design updates
- Changed title of recipe.note field from "Author's note" to "Editor's note"

## [0.0.4] - 2026-05-03

### Added

- Created CHANGELOG.md

## [0.0.3] - 2026-04-30

### Added

- New landing page created (LandingPage.jsx / LandingPage.css) to provide more context for user on initial page load
- Optional recipe.note field added to recipe section with title "Author's Note"

### Changed

- Fonts replaced with Fontsource CDN @font-face declarations added for Instrument Serif (normal + italic), DM Sans (400 + 500), and Meddon
- Typekit link removed from index.html
- Color system rewritten: #054A91 blue ink replaced with #1A1A18 near-black (--ink), #C8402D vermillion as the new accent, #FAF6F0 cream background
- PNG logo in header replaced with text-based "Gin [Meddon &] Phonics" in Instrument Serif (22px), with the tagline right-aligned in Meddon (10px) instead of left-aligned sans-serif
- Passage display text is now Instrument Serif italic (15px, 70% opacity), title is italic and smaller (22px)
- Recipe card white background with a 4px mustard left-border accent, all type scaled down (name 20px, why 13px italic, ingredients DM Sans 12px, method Instrument Serif 12.5px)
- Shuffle bar moved out of a shared bar with the topic label

### Removed

- Footer rule element

## [0.0.2] - 2026-03-13

### Added

- Added missing passage data to passages.js

## [0.0.1] - 2026-03-12

### Added

- Added toasts to passages.js

### Changed

- Updated empty state vertical padding
- Enlarged all font sizes to improve readability
- Fixed issues with mobile layout
- Updated logo, fonts and header layout

## [0.0.0] - 2026-03-10

### Added

- Initial commit