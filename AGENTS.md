# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **static website** for the Uganda FABWS friendship association
(plain HTML/CSS/JS, no framework, no build step). Pages are the top-level `*.html`
files (`index.html`, `contact.html`, `donate.html`, `news.html`, `pictures.html`,
`projects.html`); assets live in `css/`, `js/`, `img/`, and `misc/`.

### Running the site

- Package manager is **pnpm** (`pnpm-lock.yaml`). The only dependency is `live-server`.
- Dev server: `pnpm start` (defined in `package.json` as `live-server`). It serves on
  port `8080` by default and live-reloads on file changes.
- In this headless environment, start it without trying to open a browser:
  `pnpm start --no-browser --port=8080`. Without `--no-browser`, `live-server` will
  log a failure trying to launch a browser but still serves correctly.

### Build / test / lint

- There is **no build step** (static files are served as-is).
- There is **no test suite** — `pnpm test` intentionally exits with an error
  (`"Error: no test specified"`).
- There is **no lint script**. Formatting is via Prettier (`.prettierrc`: 4-space
  indent, no tabs) and `.vscode/settings.json` enables format-on-save; Prettier is not
  installed as a project dependency, so run it via `pnpm dlx prettier` if needed.
