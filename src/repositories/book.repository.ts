import {pool} from '../config/database.js'

export const getAllBooks = async ()=>{
    const query = `
    SELECT 
    b.id,
    b.title,
    b.isbn,
    b.description,
    b.published_year,
    b.created

    FROM books b 
    ORDER BY b.created_at DESC

`
const result = pool.query(query)
return result
}

