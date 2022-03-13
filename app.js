require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

// Rotes

app.get('/', (req, res) => {
  res.send(`<h1>Blog App</h1>`)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`)
})