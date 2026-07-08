# CWL

A [Next.js](https://nextjs.org) project using the App Router, React, and TypeScript.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
public/              Static assets served at the root
src/
  app/               App Router routes, layouts, and pages
    layout.tsx       Root layout
    page.tsx         Home page (/)
  components/        Reusable React components
  lib/               Utilities, helpers, and data-fetching logic
  styles/            Global styles
    globals.css
  types/             Shared TypeScript types
```

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — run the production server
- `npm run lint` — run ESLint
