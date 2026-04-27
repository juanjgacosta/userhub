<h1 align="center"> API</h1>

<p align="center">
UserHub REST API reference with endpoints, authentication requirements, payloads, and expected responses.
</p>

<h2> Table of Contents </h2>

- [Overview](#overview)
- [Base URL](#base-url)
- [Authentication and Authorization](#authentication-and-authorization)
- [Error Response Pattern](#error-response-pattern)
- [Endpoints Summary](#endpoints-summary)
- [Health Check](#health-check)
- [Authentication](#authentication)
- [Users](#users)
  - [Create User](#create-user)
  - [List Users](#list-users)
  - [Update User](#update-user)
  - [Delete User](#delete-user)
  - [Update User Avatar](#update-user-avatar)
- [Swagger Documentation](#swagger-documentation)
- [Return to Root README](#return-to-root-readme)

## Overview

The backend API is implemented with **Express + TypeScript + TypeORM** and exposes endpoints to:

- authenticate users
- create, list, update, and remove users
- upload user avatars
- check API health status

## Base URL

Local development base URL:

```bash
http://localhost:4000
```

## Authentication and Authorization

The API currently uses JWT bearer tokens for protected endpoints.

- Token format: `Authorization: Bearer <token>`
- Protected routes require a valid token (`ensureAuthenticated` middleware).
- `POST /users/auth` additionally validates whether the user is admin (`ensureAdmin` middleware).

## Error Response Pattern

When an `AppError` is thrown, the API responds with:

```json
{
  "status": "error",
  "message": "Error description"
}
```

For unexpected failures:

```json
{
  "status": "error",
  "message": "Internal server error - <details>"
}
```

## Endpoints Summary

| Method | Endpoint           | Auth required | Description                    |
| ------ | ------------------ | ------------- | ------------------------------ |
| GET    | `/checkHealth`     | No            | Returns service health         |
| POST   | `/users/auth`      | Admin check   | Authenticates user and returns JWT |
| POST   | `/users`           | Yes           | Creates a user                 |
| GET    | `/users`           | No            | Lists users (public fields)    |
| PUT    | `/users/:id`       | Yes           | Updates user fields            |
| DELETE | `/users/:id`       | Yes           | Removes a user                 |
| PATCH  | `/users/:id/avatar`| Yes           | Uploads/replaces user avatar   |

## Health Check

### `GET /checkHealth`

Returns API availability status.

Response `200`:

```json
{
  "message": "ok"
}
```

## Authentication

### `POST /users/auth`

Authenticates a user and returns a signed JWT token.

Request body:

```json
{
  "email": "admin@email.com",
  "password": "admin"
}
```

Response `201`:

```json
{
  "name": "admin",
  "email": "admin@email.com",
  "token": "<jwt-token>"
}
```

Possible errors:

- `400` when `email/password` are missing
- `401` when credentials are invalid
- `403` when user is not admin

## Users

### Create User

### `POST /users`

Creates a new user.

Headers:

```bash
Authorization: Bearer <token>
Content-Type: application/json
```

Request body:

```json
{
  "name": "John Doe",
  "email": "johndoe@email.com",
  "company": "Company Name",
  "password": "123456",
  "avatar": ""
}
```

Response `201`:

```json
{
  "id": "<uuid>",
  "name": "John Doe",
  "email": "johndoe@email.com",
  "company": "Company Name",
  "password": "<hashed-password>",
  "avatar": "",
  "isAdmin": false,
  "created_at": "2026-04-27T...",
  "updated_at": "2026-04-27T..."
}
```

Possible errors:

- `401` token missing/expired
- `403` user does not exist or invalid token
- `400`/`409` style business errors (for example, duplicate email)

### List Users

### `GET /users`

Returns all users with public fields.

Response `200`:

```json
[
  {
    "id": "<uuid>",
    "name": "John Doe",
    "email": "johndoe@email.com",
    "company": "Company Name",
    "avatar": "",
    "created_at": "2026-04-27T...",
    "updated_at": "2026-04-27T..."
  }
]
```

### Update User

### `PUT /users/:id`

Updates user data by `id`.

Headers:

```bash
Authorization: Bearer <token>
Content-Type: application/json
```

Request body:

```json
{
  "name": "John Updated",
  "email": "john.updated@email.com",
  "company": "New Company",
  "password": "newpassword123"
}
```

Response `200`:

```json
{
  "message": "user - john.updated@email.com - updated"
}
```

Possible errors:

- `401` token missing/expired
- `403` invalid token/user
- `404` user not registered

### Delete User

### `DELETE /users/:id`

Removes a user by `id` and deletes avatar file when present.

Headers:

```bash
Authorization: Bearer <token>
```

Response `200`:

```json
{
  "message": "The User - johndoe@email.com - has been removed"
}
```

Possible errors:

- `401` token missing/expired
- `403` invalid token/user
- `404` user not registered

### Update User Avatar

### `PATCH /users/:id/avatar`

Uploads or replaces a user avatar.

Headers:

```bash
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

Form-data:

- `avatar`: file (`.jpg`, `.jpeg`, `.png`, etc.)

Response `204`:

- no body

Possible errors:

- `401` token missing/expired
- `403` invalid token/user
- `404` user not registered

## Swagger Documentation

The API also exposes OpenAPI docs via Swagger UI:

```bash
http://localhost:4000/documentation
```

## Return to Root README

- [Back to `userHub/README.md`](../README.md)
