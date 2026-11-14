import { pool } from '../config/database.js';
import type { CreateBookInput } from '../validators/book.validator.js';

export const getAllBooks = async () => {
    const query = `
        SELECT
            b.id,
            b.title,
            b.isbn,
            b.description,
            b.published_year,
            b.created_at
        FROM books b
        ORDER BY b.created_at DESC
    `;

    const result = await pool.query(query);
    return result.rows;
};

export const getBookById = async (id: number) => {
    const query = `
        SELECT *
        FROM books
        WHERE id = $1;
    `;

    const result = await pool.query(query, [id]);

    return result.rows[0] || null;
};

export const createBook = async (data: CreateBookInput) => {
    const { title, isbn, description, published_year } = data;

    const query = `
        INSERT INTO books (title, isbn, description, published_year)
        VALUES ($1, $2, $3, $4)
        RETURNING id, title, isbn, description, published_year, created_at;
    `;

    const result = await pool.query(query, [
        title,
        isbn ?? null,
        description ?? null,
        published_year ?? null,
    ]);

    return result.rows[0];
};


import type { UpdateBookInput } from "../validators/update-book.validator.js";

export const updateBook = async (
    id: number,
    data: UpdateBookInput
) => {
    const query = `
        UPDATE books
        SET
            title = COALESCE($1, title),
            isbn = COALESCE($2, isbn),
            description = COALESCE($3, description),
            published_year = COALESCE($4, published_year)
        WHERE id = $5
        RETURNING *;
    `;

    const values = [
        data.title,
        data.isbn,
        data.description,
        data.published_year,
        id,
    ];

    const result = await pool.query(query, values);

    return result.rows[0] || null;
};


export const deleteBook = async (id:number)=>{
    const query = `
        DELETE FROM books 
        WHERE id = $1
        RETURNING *;
    `;

    const result = await pool.query(query, [id]);
    return result.rows[0] || null
}