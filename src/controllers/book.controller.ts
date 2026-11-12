import type { CreateBookInput } from "../validators/book.validator.js";

export const createBook = async (data: CreateBookInput) => {
    const query = `
        INSERT INTO books (
            title,
            isbn,
            description,
            published_year
        )
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;

    const values = [
        data.title,
        data.isbn ?? null,
        data.description ?? null,
        data.published_year ?? null,
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
};