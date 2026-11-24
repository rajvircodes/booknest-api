import type { Request, Response,NextFunction } from "express";
import ApiError from "../utils/api-error.js";


const notFoundMiddleware = (
    req:Request,
    _res:Response,
    next:NextFunction
)=>{
    next(
        new ApiError(
            `Route ${req.method} ${req.originalUrl} not found`,
            404
        )
    )
}

export default notFoundMiddleware