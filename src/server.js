import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import userRouter from './routes/user.routes'

dotenv.config()

const PORT = process.env.PORT || 2222
export const app = express()

app.use(morgan('dev'))
app.use('/', userRouter)

export const start = () => {
  app.listen(PORT, () => {
    console.log(`server running on localhost:${PORT}`)
  })
}
