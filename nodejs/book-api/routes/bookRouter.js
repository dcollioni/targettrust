const { Router } = require('express')
const {
    findBooks,
    insertBook,
    findBookById,
    updateBook,
    deleteBook
} = require('./../db/bookDb')

const router = new Router()

router.get('/', async (req, res) => {
    const books = await findBooks()
    res.send(books)
})

router.post('/', async (req, res) => {
    try {
        const book = await insertBook(req.body)
        res.status(201).send(book)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.get('/:bookId', async (req, res) => {
    const { bookId } = req.params
    try {
        const book = await findBookById(bookId)
        res.send(book)
    } catch (err) {
        res.sendStatus(404)
    }
})

router.put('/:bookId', async (req, res) => {
    const { bookId } = req.params

    try {
        const book = await updateBook(bookId, req.body)
        res.send(book)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.delete('/:bookId', async (req, res) => {
    const { bookId } = req.params

    try {
        await deleteBook(bookId)
        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

module.exports = router