# BookNest - Database Design

## 1. Project Overview

BookNest is a Library Management REST API.

## 2. Functional Requirements

- Book management
- Author management
- Category management
- Member management
- Book copy management
- Book borrowing
- Book returns
- Search and filtering

## 3. Database Entities

1. Authors
2. Books
3. Categories
4. Book Authors
5. Book Categories
6. Book Copies
7. Members
8. Loans

## 4. Relationships

- Authors and Books: Many-to-Many
- Categories and Books: Many-to-Many
- Books and Book Copies: One-to-Many
- Members and Loans: One-to-Many
- Book Copies and Loans: One-to-Many

## 5. Business Rules

- Every book copy belongs to one book.
- A member can borrow multiple books.
- A book copy can have only one active loan.
- Returning a book updates its availability.
- Email addresses of members must be unique.