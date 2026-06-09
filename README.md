# Wardrobe

A minimal virtual wardrobe app built with React, Vite, and Tailwind CSS.

Browse your clothing collection and mix-and-match outfits on a mannequin display. Images are loaded directly from the `src/assets/clothes/` directory — no database or backend needed.

## Features

- Mannequin view with layered tops, bottoms, and shoes
- Swipeable carousels per category on the outfit screen
- Browse view with a filterable grid and selected-item indicator
- Add new items by dropping images into the assets folders — they appear automatically

## Getting started

```bash
npm install
npm run dev
```

## Adding clothes

Drop image files (`.jpg`, `.png`, `.webp`) into the relevant folder:

```
src/assets/clothes/
  tops/
  bottoms/
  shoes/
```

The filename becomes the item name (underscores and hyphens are replaced with spaces).

## Tech stack

- [React 18](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
