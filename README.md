# Landing CV — Joaquín Montorsi

Personal landing page / online CV built with React and Tailwind CSS.

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- **Flowbite React** — UI components (Timeline, Badge, Progress, DarkThemeToggle)
- **React Icons** — icon library

## Project Structure

```
src/
├── assets/              # Static files (images, PDFs)
├── components/          # Page sections
│   ├── Hero.jsx         # Photo, name, title, summary
│   ├── Skills.jsx       # Technical skills by category
│   ├── Experience.jsx   # Work experience timeline
│   ├── Education.jsx    # Education timeline
│   ├── Languages.jsx    # Languages with proficiency bars
│   └── Contact.jsx      # Contact links
├── data.js              # All CV content in one place
├── App.jsx              # Layout + dark mode
├── main.jsx             # Entry point
└── index.css            # Tailwind import
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Editing Content

All CV data lives in `src/data.js`. Update that file to change any section content without touching components.
