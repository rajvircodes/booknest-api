import express from 'express'
import bookRoutes from './routes/book.routes.js'
import errorMiddleware from './middlewares/error.middleware.js'
import notFoundMiddleware from "./middlewares/not-found.middleware.js";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { rateLimit } from "express-rate-limit";

const app = express()
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Maximum 100 requests
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: {
        success: false,
        message: "Too many requests. Please try again later.",
    },
});
app.use(helmet());
app.use(morgan("dev"));
app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json())

app.get('/health',(_req,res)=>{
   res.status(200).json({
    success:true,
    message:"Books API is running..."
   })
})

app.use('/api/books', bookRoutes)
app.use(notFoundMiddleware);
app.use(errorMiddleware);
export default app