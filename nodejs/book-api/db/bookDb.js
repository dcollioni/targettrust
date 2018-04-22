const { BookModel } = require('./mongo')

const findBooks = () => {
    return BookModel.find({})
}

const insertBook = (book) => {
    const newBook = new BookModel(book)
    return newBook.save()
}

const findBookById = (bookId) => {
    return BookModel.findById(bookId)
}

const updateBook = async (bookId, book) => {
    const bookToUpdate = await findBookById(bookId)
    
    bookToUpdate.title = book.title
    bookToUpdate.author = book.author
    bookToUpdate.category = book.category
    bookToUpdate.numberOfPages = book.numberOfPages
    bookToUpdate.publicationYear = book.publicationYear
    
    return bookToUpdate.save()
}

const deleteBook = async (bookId) => {
    const book = await findBookById(bookId)
    return book.remove()
}

module.exports = {
    findBooks,
    insertBook,
    findBookById,
    updateBook,
    deleteBook
}