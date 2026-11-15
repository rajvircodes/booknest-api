import { Request,Response, NextFunction } from "express";
import ApiError from "../utils/api-error.js";

const errorMiddleware = (
    error:Error,
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    let statusCode = 500;
    let message = "Internal server error"

    if(error instanceof ApiError){
        statusCode = error.statusCode;
        message = error.message;
    }

    console.error("ERROR",error)

     res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === "development" && {
            stack: error.stack,
        }),
    });
}