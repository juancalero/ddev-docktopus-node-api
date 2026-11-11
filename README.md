# DDEV Docktopus Node API

Node 22 + [Express 5](https://expressjs.com/) API service for DDEV, taken from the [docktopus](https://github.com/juancalero/docktopus) stack. It serves the code in the project's `api/` directory and connects to the PostgreSQL service from [`ddev-docktopus-postgres`](https://github.com/juancalero/ddev-docktopus-postgres).

If the project has no `api/` directory, the add-on scaffolds a minimal working API (Express 5, `cors`, `pg`, `nodemon`) — an existing `api/` is never touched.

> Part of [ddev-docktopus](https://github.com/juancalero/ddev-docktopus) — the meta add-on that installs the whole docktopus stack with one command.

## Installation

```
ddev add-on get juancalero/ddev-docktopus-node-api
ddev restart
```

The first `ddev start` runs `npm install` inside the container (skipped if `node_modules` already exists) and then `npm run dev` (nodemon hot-reload).

## Usage

| | URL |
| --- | --- |
| Host | `http://<project>.ddev.site:13000` — also `ddev api` |
| From other containers | `http://node:3000` |
| From Drupal (web container) | `http://node:3000` (also in the `NODE_API` env var) |

Endpoints in the scaffold: `GET /hello`, `GET /api/users` (needs the postgres add-on).

Develop by editing `api/` in the project as usual — nodemon reloads on save.

## Configuration

Connection to PostgreSQL is injected from `.ddev/.env.ddev-docktopus-postgres` (the postgres add-on's file): `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS`, `DB_NAME`. Change the router port with `NODE_API_HTTP_PORT` (default `13000`) in `.ddev/.env.ddev-docktopus-node-api` (create it if needed).

## Uninstallation

```
ddev add-on remove ddev-docktopus-node-api
ddev restart
```

The `api/` scaffold is removed only if every file still carries the `#ddev-generated` marker (i.e. you never edited it).

## License

GPL-2.0-or-later
