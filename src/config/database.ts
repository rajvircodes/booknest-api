import pg from "pg";
import { env } from "./env.js";

const { Pool } = pg;

export const pool = new Pool({
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME,
    user: env.DB_USER,
    password: env.DB_PASSWORD,

    max: 10,

    idleTimeoutMillis: 30000,

    connectionTimeoutMillis: 2000,
});

pool.on("error", (error) => {
    console.error("Unexpected database pool error:", error);
});