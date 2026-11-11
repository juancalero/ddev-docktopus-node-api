[![tests](https://github.com/juancalero/ddev-docktopus-node-api/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/juancalero/ddev-docktopus-node-api/actions/workflows/tests.yml)
[![release](https://img.shields.io/github/v/release/juancalero/ddev-docktopus-node-api)](https://github.com/juancalero/ddev-docktopus-node-api/releases/latest)

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
| Host (HTTP) | `http://<project>.ddev.site:13000` — also `ddev api` |
| Host (HTTPS) | `https://<project>.ddev.site:13001` |
| From other containers | `http://node:3000` |
| From Drupal (web container) | `http://node:3000` (also in the `NODE_API` env var) |

Endpoints in the scaffold: `GET /hello`, `GET /api/users` (needs the postgres add-on).

Develop by editing `api/` in the project as usual — nodemon reloads on save. The scaffolded files carry a `#ddev-generated` marker; edit them freely and the add-on will respect your changes (re-running the install leaves them untouched).

## Configuration

Connection to PostgreSQL is injected from `.ddev/.env.ddev-docktopus-postgres` (the postgres add-on's file): `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS`, `DB_NAME`.

Router ports are set in `.ddev/.env.ddev-docktopus-node-api`:

| Variable | Default | Description |
| --- | --- | --- |
| `NODE_API_HTTP_PORT` | `13000` | Router port for the HTTP UI |
| `NODE_API_HTTPS_PORT` | `13001` | Router port for the HTTPS UI |

## Uninstallation

```
ddev add-on remove ddev-docktopus-node-api
ddev restart
```

The `api/` scaffold is removed only if every file still carries the `#ddev-generated` marker (i.e. you never edited it).

## License

GPL-2.0-or-later
