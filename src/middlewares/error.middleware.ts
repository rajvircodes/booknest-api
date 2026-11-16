import type { Request, Response, NextFunction } from "express";
import ApiError from "../utils/api-error.js";

const errorMiddleware = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let statusCode = 500;
    let message = "Internal Server Error";

    if (error instanceof ApiError) {
        statusCode = error.statusCode;
        message = error.message;
    }

    // PostgreSQL error handling
    const dbError = error as Error & { code?: string };

    switch (dbError.code) {
        case "23505":
            statusCode = 409;
            message = "A record with this value already exists";
            break;

        case "23503":
            statusCode = 409;
            message = "Operation conflicts with related records";
            break;

        case "23514":
        case "23502":
            statusCode = 400;
            message = "Invalid data provided";
            break;
    }

    console.error("ERROR:", error);

    res.status(statusCode).json({
        success: false,
        message,
    });
};

export default errorMiddleware;