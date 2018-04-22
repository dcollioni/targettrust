const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/book-manager'

const connect = async () => {
  return mongoose.connect(url)
}

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  category: String,
  numberOfPages: Number,
  publicationYear: Number
})

const BookModel = mongoose.model('Book', bookSchema)

module.exports = {
  connect,
  BookModel
}