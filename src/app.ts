import express from 'express'
import bookRoutes from './routes/book.routes.js'
import errorMiddleware from './middlewares/error.middleware.js'
import notFoundMiddleware from "./middlewares/not-found.middleware.js";
import morgan from "morgan";

const app = express()
app.use(morgan("dev"));
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