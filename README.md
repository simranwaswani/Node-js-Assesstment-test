# Node Fundamentals Assessment

## Setup & Run
- Install dependencies: `npm install`
- Run specific demos:
  - `node styledOutput.js` to see Chalk-styled console output.
  - `node asyncFileHandler.js` to process `input.txt` via callbacks, promises, and async/await.
  - `node eventLoopDemo.js`, `node main.js`, or other scripts as needed.
- Environment: Node.js 18+ recommended (ES modules + Chalk 4 support).

## Files & Purpose
- `styledOutput.js` – Demonstrates Chalk styling, menu rendering, and message helpers.
- `asyncFileHandler.js` – Reads `input.txt`, writes `*-processed` outputs via callback/promise/async flows.
- `input.txt` – Sample text processed by async demos; auto-created if missing.
- `eventLoopDemo.js`, `EVENT_LOOP_EXPLANATION.md` – Describe and illustrate Node’s event loop behavior.
- `calculator.js`, `mathUtils.js` – Number utilities for prior tasks.
- `validator.mjs`, `user.mjs` – Module examples for validation/user objects.
- `config.js`, `app.mjs`, `main.js` – App/config entry points from earlier tasks.
- `package.json`, `package-lock.json` – Dependency definitions (`chalk`, `dotenv`, `nodemon`).
- `data/`, `activity.log`, `fileManager.js`, `pathUtils.js`, `welcome.js` – Supporting assets/utilities referenced in assessment tasks.

## Assumptions
- Node.js and npm are available locally; scripts are run individually (no central entry point).
- File-processing scripts operate within the project root; relative paths refer to this directory.
- Users run demos in a terminal that supports ANSI colors (for Chalk output).

## Challenges & Notes
- Balancing three async patterns required shared helpers (e.g., output naming) to keep behavior aligned.
- Chalk styling needed careful ordering to ensure every requirement (welcome/error/warn/info/menu) was showcased in a single run.
- Ensuring idempotent demo files (auto-creating `input.txt` only when missing/empty) prevented accidental overwrites during repeated runs.
