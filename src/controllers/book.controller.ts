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

export const getBookById = async (
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try {
        const id = Number(req.params.id)

        if(!Number.isInteger(id) || id <= 0){
            res.status(400).json({
                success:false,
                message:"Invalid book ID",
            });
            return;
        }

        const book = await bookService.getBookById(id);
            res.status(200).json({
                success:true,
                data:book,
            })
    } catch (error) {
        next(error)
    }
}