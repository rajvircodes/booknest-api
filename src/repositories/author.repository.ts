import { pool } from "../config/database.js";
// import type { CreateAuthorInput, UpdateAuthorInput } from "../validators/author.validator.js";

import type { CreateAuthorInput } from "../validators/author.validator.js";
import type { UpdateAuthorInput } from "../validators/update-author.validator.js";



// Get all authors

export const getAllAuthors = async()=>{
    const query = `
    SELECT
        id,
        name,
        biography,
        created_at
    FROM authors
    ORDER BY created_at DESC;
    `;

    const result = await pool.query(query);
    return result.rows;
}

export const getAuthorById = async(id:number)=>{
    const query =  `
        SELECT * FROM authors
        WHERE id = $1;
    `;

    const result = await pool.query(query,[id]);
    return result.rows[0] || null;
}

export const createAuthor = async(data:CreateAuthorInput)=>{
    const query =  `
        INSERT INTO authors (name, biography)
        VALUES ($1, $2)
        RETURNING *;
    `;

    const values = [
        data.name,
        data.biography ?? null,
    ];

    const result = await pool.query(query, values)
    return result.rows[0];
}

// UPDATE author
export const updateAuthor = async (
    id: number,
    data: UpdateAuthorInput
) => {
    const query = `
        UPDATE authors
        SET
            name = COALESCE($1, name),
            biography = COALESCE($2, biography)
        WHERE id = $3
        RETURNING *;
    `;

    const values = [
        data.name ?? null,
        data.biography ?? null,
        id,
    ];

    const result = await pool.query(query, values);

    return result.rows[0] || null;
};

// DELETE author
export const deleteAuthor = async (id: number) => {
    const query = `
        DELETE FROM authors
        WHERE id = $1
        RETURNING *;
    `;

    const result = await pool.query(query, [id]);

    return result.rows[0] || null;
};