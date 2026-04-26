# AGENTS.md

## Project Overview

This repository is a small static browser prototype for **Retaking Constantinople**. It uses a single Three.js scene, a menu/instructions flow, and lightweight keyboard/mouse controls.

The project is intentionally simple:

- `index.html` contains the app structure and the main scene logic
- `styles.css` contains all styling for the menu and scene UI
- `index.js` currently exists but is unused
- `README.md` explains the premise and local run flow

## Run Locally

Serve the repo with any static file server, for example:

```bash
python3 -m http.server
```

Then open `http://localhost:8000`.

## Editing Guidance

- Prefer small, direct edits over introducing new tooling or framework structure.
- Keep the project static unless there is a clear reason to split code out of `index.html`.
- Preserve the current visual tone and menu flow unless a task explicitly asks for a redesign.
- When changing controls, update any matching player-facing text in the instructions screen.
- Keep Three.js code readable and local; avoid unnecessary abstraction for one-off scene elements.
- Treat `index.js` as optional unless you are explicitly moving logic into it.

## Verification

After changes:

- check that the menu, instructions screen, and scene transitions still work
- verify keyboard movement and mouse look behavior in the browser
- confirm layout still works at common desktop and mobile widths

## Notes For Future Agents

- Camera and movement logic currently live near the bottom of `index.html`.
- The scene is rendered directly from a CDN-hosted Three.js module import.
- This repo may have user-made changes in progress; do not revert unrelated edits.
