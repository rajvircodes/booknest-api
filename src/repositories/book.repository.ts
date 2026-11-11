import {pool} from '../config/database.js'

export const getAllBooks = async ()=>{
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

`
const result = pool.query(query)
return result
}

export const getBookById = async (id: number) => {
    const query = `
        SELECT *
        FROM books
        WHERE id = $1;
    `;

    const result = await pool.query(query, [id]);

    return result.rows[0] || null;
};

