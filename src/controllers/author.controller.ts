import type { Request, Response, NextFunction } from "express";
import * as authorService from '../services/author.service.js'
import { createAuthorSchema } from "../validators/author.validator.js";


// GET /api/author

export const getAllAuthors = async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try {
        const authors = await authorService.getAllAuthors();
        res.status(200).json({
            success:true,
            count:authors.length,
            data:authors
        })
    } catch (error) {
        next(error)
    }
}
export const getAuthorById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            res.status(400).json({
                success: false,
                message: "Invalid author ID",
            });
            return;
        }

        const author = await authorService.getAuthorById(id);

        res.status(200).json({
            success: true,
            data: author,
        });
    } catch (error) {
        next(error);
    }
};

// POST /api/authors
export const createAuthor = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const validation = createAuthorSchema.safeParse(req.body);

        if (!validation.success) {
            res.status(400).json({
                success: false,
                errors: validation.error.flatten().fieldErrors,
            });
            return;
        }

        const author = await authorService.createAuthor(validation.data);

        res.status(201).json({
            success: true,
            message: "Author created successfully",
            data: author,
        });
    } catch (error) {
        next(error);
    }
};