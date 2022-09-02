import express from 'express'
import connectDb from './config/db.js'
import route from './routes/index.js'

const app = express()

// Apply middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Connect to database
connectDb()

// Routes init
route(app)

const PORT = process.env.PORT ?? 8000
app.listen(PORT)