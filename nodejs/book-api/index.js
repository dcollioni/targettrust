const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const bookRouter = require('./routes/bookRouter')
const { connect } = require('./db/mongo')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/books', bookRouter)

app.listen(8080, async () => {
  console.log('book-api running at localhost:8080')

  await connect()
  console.log('connected to mongodb')
})