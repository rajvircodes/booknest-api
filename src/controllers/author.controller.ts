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