<h1 align="center"> Database</h1>

The project uses SQLite with TypeORM migrations.

Main table:

users

The `User` entity represents an application user and contains:

| Field      | Type      | Description           |
| ---------- | --------- | --------------------- |
| id         | uuid      | Primary key           |
| name       | varchar   | User full name        |
| email      | varchar   | Unique email          |
| company    | varchar   | Company name          |
| password   | varchar   | Hashed password       |
| avatar     | varchar   | Avatar file reference |
| isAdmin    | boolean   | Admin permissions     |
| created_at | timestamp | Creation date         |
| updated_at | timestamp | Last update date      |
