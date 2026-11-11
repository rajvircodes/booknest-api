import app from "./app.js";
import { env } from "./config/env.js";
import { pool } from "./config/database.js";

const startServer = async () => {
    try {
        // Test PostgreSQL connection
        const result = await pool.query(
            "SELECT current_database() AS database"
        );

        console.log(`Connected to database: ${result.rows[0].database}`);

        // Start Express server
        app.listen(env.PORT, () => {
            console.log(`BookNest API running on port ${env.PORT}`);
        });

    } catch (error) {
        console.error("Failed to start server:", error);

        await pool.end();
        process.exit(1);
    }
};

startServer();