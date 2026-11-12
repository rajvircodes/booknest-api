import type { Request, Response, NextFunction } from "express";
import * as bookService from "../services/book.service.js";
import { createBookSchema } from "../validators/book.validator.js";

// GET /api/books
export const getAllBooks = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const books = await bookService.getAllBooks();

        res.status(200).json({
            success: true,
            count: books.length,
            data: books,
        });
    } catch (error) {
        next(error);
    }
};

// GET /api/books/:id
export const getBookById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            res.status(400).json({
                success: false,
                message: "Invalid book ID",
            });
            return;
        }

        const book = await bookService.getBookById(id);

        res.status(200).json({
            success: true,
            data: book,
        });
    } catch (error) {
        next(error);
    }
};

// POST /api/books
export const createBook = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const validation = createBookSchema.safeParse(req.body);

        if (!validation.success) {
            res.status(400).json({
                success: false,
                errors: validation.error.flatten().fieldErrors,
            });
            return;
        }

        const book = await bookService.createBook(validation.data);

        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: book,
        });
    } catch (error) {
        next(error);
    }
};