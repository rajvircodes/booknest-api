import type { Request, Response, NextFunction } from "express";
import * as bookService from '../services/book.service.js';

export const getAllBooks = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const books = await bookService.getAllBooks();

        res.status(200).json({
            success: true,
            count: books.length,
            data: books
        });
    } catch (error) {
        next(error);
    }
};