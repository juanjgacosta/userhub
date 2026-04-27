<h1 align="center"> Database</h1>

<p align="center">
Database structure and migration reference for UserHub API.
</p>

<h2> Table of Contents </h2>

- [Overview](#overview)
- [Database Engine and Access Layer](#database-engine-and-access-layer)
- [Current Schema](#current-schema)
- [Users Table Specification](#users-table-specification)
- [Migrations History](#migrations-history)
- [Startup and Seed Behavior](#startup-and-seed-behavior)
- [Avatar Storage Relationship](#avatar-storage-relationship)
- [Return to Root README](#return-to-root-readme)

## Overview

UserHub persists data in a local **SQLite** database managed through **TypeORM**.

Primary characteristics:

- Single relational table: `users`
- Schema evolution via TypeORM migrations
- Bootstrap process runs pending migrations on startup
- Admin user seeding after datasource initialization

## Database Engine and Access Layer

- **Engine**: SQLite
- **ORM**: TypeORM (`DataSource`)
- **Database file**: `userhub-api/database.sqlite`
- **Entity source**: `src/modules/users/entities/User.ts`
- **Migrations source**: `src/shared/database/migrations/*.ts`

## Current Schema

The current data model centers on the `users` table.

```sql
users (
  id         uuid primary key,
  name       varchar not null,
  email      varchar not null,
  company    varchar null,
  password   varchar not null (entity contract),
  avatar     varchar not null (entity contract),
  isAdmin    boolean default false,
  created_at timestamp,
  updated_at timestamp
)
```

## Users Table Specification

| Column     | Type      | Nullable | Default | Description |
| ---------- | --------- | -------- | ------- | ----------- |
| id         | uuid      | No       | -       | Primary key generated per user |
| name       | varchar   | No       | -       | User full name |
| email      | varchar   | No       | -       | User email |
| company    | varchar   | Yes      | -       | Company name |
| password   | varchar   | Yes in migration history | - | Password hash stored with bcrypt |
| avatar     | varchar   | Yes in migration history | - | Avatar filename/path reference |
| isAdmin    | boolean   | No       | `false` | Admin authorization flag |
| created_at | timestamp | No       | `now()` | Creation timestamp |
| updated_at | timestamp | No       | `now()` | Last update timestamp |

## Migrations History

| Order | Migration File | Change |
| ----- | -------------- | ------ |
| 1 | `1692623519675-CreateUsers.ts` | Creates `users` table with base fields (`id`, `name`, `email`, `company`, `created_at`, `updated_at`) |
| 2 | `1693843193744-AlterUserAddPassword.ts` | Adds `password` column |
| 3 | `1760707562554-AlterUserAddAvatar.ts` | Adds `avatar` column |
| 4 | `1773334075766-AlterUserAddIsAdmin.ts` | Adds `isAdmin` boolean column with default `false` |

## Startup and Seed Behavior

At API startup, the datasource bootstrapping process:

1. initializes the SQLite connection
2. executes pending migrations (`runMigrations`)
3. runs `createAdminUser` seed logic

Admin seed behavior:

- checks if `admin@email.com` exists
- if not found, inserts default admin user with `isAdmin: true`

## Avatar Storage Relationship

Avatar binaries are stored in the filesystem under:

```bash
userhub-api/tmp/avatar/
```

The database stores only the avatar filename/path reference in `users.avatar`.

When avatar updates/removals occur, service logic keeps filesystem and DB references synchronized.

## Return to Root README

- [Back to `userHub/README.md`](../README.md)
