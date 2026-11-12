import express from 'express'
import bookRoutes from './routes/book.routes.js'


const app = express()

app.use(express.json())

app.get('/health',(_req,res)=>{
   res.status(200).json({
    success:true,
    message:"Books API is running..."
   })
})

app.use('/api/books', bookRoutes)

export default app