require('dotenv').config()

const authRoute = require('./routes/auth')
const indexRoute = require('./routes/index')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use('/', authRoute)
app.use('/', indexRoute)

app.use(cors())
app.use(express.json())

//MongoDb connect

console.log("Connecting to MongoDB...")

const uri = process.env.MONGO_DB_URI

mongoose.connect(uri).then(() => {
  console.log("Successfully connected to mongoDB!")
}).catch(err => {
  console.log("Error connecting to MongoDB: ", err)
})

//Server PORT engine

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`)
})