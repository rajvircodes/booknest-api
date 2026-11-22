import { pool } from "../config/database.js";
import type { CreateAuthorInput } from "../validators/author.validator.js";



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