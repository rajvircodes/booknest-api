import type { Request, Response,NextFunction } from "express";

import * as bookService from '../services/book.service.js'

export const getAllBooks = async (
    req_:Request,
    res:Response,
    next:NextFunction
)=>{
    try {
        const books = await bookService.getAllBooks()

        res.status(200).json({
            success:true,
            count: books.length,
            data:books
        })
    } catch (error) {
        next(error)
    }
}