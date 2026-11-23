# BookNest API

A RESTful Library Management API built using **Node.js, Express.js, TypeScript, and PostgreSQL**.

BookNest provides backend functionality for managing books and their authors. It follows a layered architecture with separate controllers, services, repositories, and validation schemas.

## Features

### Books Management

- Create a new book.
- Retrieve all books.
- Retrieve a book by ID.
- Update book details.
- Delete a book.

### Authors Management

- Create a new author.
- Retrieve all authors.
- Retrieve an author by ID.
- Update author details.
- Delete an author.

### Backend Features

- RESTful API architecture.
- PostgreSQL database integration.
- Raw SQL queries using node-postgres (`pg`).
- Request validation using Zod.
- Centralized error handling.
- Environment variable validation.
- CORS configuration.
- HTTP security headers using Helmet.
- Request logging using Morgan.
- API rate limiting.

## Tech Stack

| Technology         | Purpose                       |
| ------------------ | ----------------------------- |
| Node.js            | JavaScript runtime            |
| Express.js         | Backend framework             |
| TypeScript         | Type safety                   |
| PostgreSQL         | Relational database           |
| node-postgres (pg) | Database connectivity         |
| Zod                | Request validation            |
| dotenv             | Environment configuration     |
| Helmet             | HTTP security headers         |
| CORS               | Cross-origin resource sharing |
| Morgan             | HTTP request logging          |
| express-rate-limit | API rate limiting             |
| Postman            | API testing                   |
| pgAdmin 4          | Database management           |

## Project Structure

```text
booknest-api/
│
├── src/
│   ├── config/
│   │   ├── database.ts
│   │   └── env.ts
│   │
│   ├── controllers/
│   │   ├── book.controller.ts
│   │   └── author.controller.ts
│   │
│   ├── services/
│   │   ├── book.service.ts
│   │   └── author.service.ts
│   │
│   ├── repositories/
│   │   ├── book.repository.ts
│   │   └── author.repository.ts
│   │
│   ├── routes/
│   │   ├── book.routes.ts
│   │   └── author.routes.ts
│   │
│   ├── validators/
│   │   ├── book.validator.ts
│   │   ├── update-book.validator.ts
│   │   ├── author.validator.ts
│   │   └── update-author.validator.ts
│   │
│   ├── middlewares/
│   │   ├── error.middleware.ts
│   │   └── not-found.middleware.ts
│   │
│   ├── utils/
│   │   └── api-error.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── database/
│   ├── migrations/
│   └── seeds/
│
├── docs/
│   ├── database-design.md
│   ├── api-documentation.md
│   └── learning-logs.md
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Getting Started

Follow these steps to run BookNest API locally.

### 1. Prerequisites

Make sure you have installed:

- Node.js
- npm
- PostgreSQL
- pgAdmin 4 (optional)
- Git

### 2. Clone the Repository

```bash
git clone https://github.com/rajvircodes/booknest-api.git
```

Navigate into the project:

```bash
cd booknest-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=booknest_db
DB_USER=postgres
DB_PASSWORD=your_postgresql_password

CLIENT_URL=http://localhost:5173
```

Replace `your_postgresql_password` with your actual PostgreSQL password.

### 5. Configure PostgreSQL

Create a database named:

```sql
CREATE DATABASE booknest_db;
```

Open the database using pgAdmin 4 or your preferred PostgreSQL client.

Execute the SQL migration files from `database/migrations/` in the correct order to create the database schema.

If you want sample data, execute the seed SQL file from `database/seeds/`.

### 6. Start the Development Server

```bash
npm run dev
```

Expected output:

```text
Connected to database: booknest_db
BookNest API running on port 5000
```

The API is now running at:

```text
http://localhost:5000
```

## API Documentation

### Base URL

```text
http://localhost:5000
```

### Health Check

| Method | Endpoint  | Description      |
| ------ | --------- | ---------------- |
| GET    | `/health` | Check API status |

### Books Endpoints

Base route: `/api/books`

| Method | Endpoint         | Description      |
| ------ | ---------------- | ---------------- |
| GET    | `/api/books`     | Get all books    |
| GET    | `/api/books/:id` | Get a book by ID |
| POST   | `/api/books`     | Create a book    |
| PUT    | `/api/books/:id` | Update a book    |
| DELETE | `/api/books/:id` | Delete a book    |

#### Create Book

**POST** `/api/books`

Request body:

```json
{
  "title": "The Alchemist",
  "isbn": "9780061122415",
  "description": "A novel by Paulo Coelho.",
  "published_year": 1988
}
```

### Authors Endpoints

Base route: `/api/authors`

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| GET    | `/api/authors`     | Get all authors     |
| GET    | `/api/authors/:id` | Get an author by ID |
| POST   | `/api/authors`     | Create an author    |
| PUT    | `/api/authors/:id` | Update an author    |
| DELETE | `/api/authors/:id` | Delete an author    |

#### Create Author

**POST** `/api/authors`

Request body:

```json
{
  "name": "Paulo Coelho",
  "biography": "Brazilian novelist best known for The Alchemist."
}
```

#### Update Author

**PUT** `/api/authors/:id`

Request body:

```json
{
  "name": "Paulo Coelho Updated"
}
```

## Response Format

Successful responses follow a consistent JSON structure.

Example:

```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "The Alchemist"
  }
}
```

Error response example:

```json
{
  "success": false,
  "message": "Book not found"
}
```

### HTTP Status Codes

| Status Code | Meaning                        |
| ----------- | ------------------------------ |
| 200         | OK                             |
| 201         | Resource created               |
| 400         | Bad request / validation error |
| 404         | Resource or route not found    |
| 409         | Database conflict              |
| 500         | Internal server error          |

## Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Compile TypeScript       |
| `npm start`     | Run compiled application |

To create a production build:

```bash
npm run build
```

To start the compiled application:

```bash
npm start
```

## Architecture

BookNest follows a layered backend architecture.

```text
Client / Postman
       |
       v
     Routes
       |
       v
   Controllers
       |
       v
    Services
       |
       v
  Repositories
       |
       v
   PostgreSQL
```

**Routes:** Define API endpoints.

**Controllers:** Handle HTTP requests and responses.

**Services:** Contain application logic and business rules.

**Repositories:** Execute SQL queries and communicate with PostgreSQL.

**Validators:** Validate incoming request data using Zod.

**Middlewares:** Handle errors, unknown routes, security, and other request processing.

## Database

BookNest uses PostgreSQL as its relational database.

The database schema includes tables for books and authors, along with supporting relational tables defined in the SQL migrations.

Database operations are performed using raw SQL queries through the `pg` package rather than an ORM.

## Testing

All API endpoints can be tested using Postman.

Recommended testing scenarios:

- Create, retrieve, update, and delete books.
- Create, retrieve, update, and delete authors.
- Test invalid IDs.
- Test missing required fields.
- Test invalid request bodies.
- Test requests for non-existing records.
- Test duplicate ISBN and email/unique constraint errors where applicable.

## Current Project Scope

BookNest currently focuses on:

- Books CRUD operations.
- Authors CRUD operations.
- PostgreSQL database integration.
- Request validation and centralized error handling.
- Basic API security and request protection.

Authentication, authorization, categories management, members, loans, and frontend development are outside the current project scope.

## Author

**Rajvirsinh**

GitHub: [@rajvircodes](https://github.com/rajvircodes)

---

Built as a backend engineering project to practice REST API development, PostgreSQL, TypeScript, SQL queries, and layered backend architecture.
