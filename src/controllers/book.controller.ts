import type { Request, Response,NextFunction } from "express";

import * as bookService from '../services/book.service.js'
import { success } from "zod";

export const getAllBooks = async (
    req:Request,
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