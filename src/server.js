import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 2222
export const app = express()

app.get('/', (req, res) => {
  res.send({ message: 'welcome' })
})

export const start = () => {
  app.listen(PORT, () => {
    console.log(`server running on localhost:${PORT}`)
  })
}
