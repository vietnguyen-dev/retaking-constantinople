# Retaking Constantinople

This is a vibe-coded browser game prototype about taking back Constantinople. It is a lightweight Three.js scene wrapped in a stylized menu flow, built more around atmosphere and dramatic presentation than deep game systems.

The current build presents a playable prototype with:

- a title screen and instruction flow
- a 3D scene rendered in the browser
- movement and camera controls for exploring the space

The browser assets live in `public/` and are served by the Express server in `server.js`.

## Premise

The game is framed as a campaign to reclaim Constantinople from occupying Turkish forces. The current version focuses on tone, environment, and presentation as the foundation for a larger action or strategy game.

## Tech

- HTML
- CSS
- JavaScript
- Three.js

## Running It

Install dependencies:

```bash
npm install
```

Start the Express server:

```bash
npm start
```

Then open `http://localhost:3000`.

For development with automatic restarts when files change:

```bash
npm run dev
```
