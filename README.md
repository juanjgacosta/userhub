<h1 align="center"> UserHub Documentation</h1>

<p align="center">
Central index for technical documentation of the UserHub project.
</p>

## Getting Started

### Package Manager

This project uses **npm workspaces** for dependency management.

Using **npm** is strongly recommended to ensure proper behavior across the workspace.

Other package managers (such as Yarn or pnpm) are not officially supported and may cause unexpected issues.

<h2> Table of Contents </h2>

- [Getting Started](#getting-started)
  - [Package Manager](#package-manager)
- [Documentation Map](#documentation-map)
- [Quick Access](#quick-access)
- [Local API Docs](#local-api-docs)

## Documentation Map

- [Architecture](./docs/architecture.md)
- [API Reference](./docs/api.md)
- [Database](./docs/database.md)

## Quick Access

| Document | Description |
| -------- | ----------- |
| [Architecture](./docs/architecture.md) | System overview, layered design, runtime flow, and visual architecture diagram |
| [API Reference](./docs/api.md) | Endpoints, authentication, payloads, responses, and error format |
| [Database](./docs/database.md) | SQLite schema, migrations history, and seed/bootstrap behavior |

## Local API Docs

When the backend is running, Swagger UI is available at:

```bash
http://localhost:4000/documentation
```