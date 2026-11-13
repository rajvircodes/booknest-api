import { pool } from "../config/database.js";

export const borrowBook = async (
    memberId: number,
    bookCopyId: number
) => {
    const client = await pool.connect();

    try {
        await client.query("BEGIN");

        const copyResult = await client.query(
            `UPDATE book_copies
             SET status = 'borrowed'
             WHERE id = $1
             AND status = 'available'
             RETURNING id`,
            [bookCopyId]
        );

        if (copyResult.rowCount !== 1) {
            throw new Error("Book copy is not available");
        }

        await client.query(
            `INSERT INTO loans (
                member_id,
                book_copy_id,
                due_at
            )
            VALUES ($1, $2, CURRENT_TIMESTAMP + INTERVAL '14 days')`,
            [memberId, bookCopyId]
        );

        await client.query("COMMIT");

        console.log("Book borrowed successfully!");

    } catch (error) {
        await client.query("ROLLBACK");

        console.error("Borrowing failed:", error);

        throw error;

    } finally {
        client.release();
    }
};