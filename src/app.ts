import express from 'express'
import bookRoutes from './routes/book.routes.js'
import errorMiddleware from './middlewares/error.middleware.js'

const app = express()

app.use(express.json())

app.get('/health',(_req,res)=>{
   res.status(200).json({
    success:true,
    message:"Books API is running..."
   })
})

app.use('/api/books', bookRoutes)
app.use(errorMiddleware);
export default app