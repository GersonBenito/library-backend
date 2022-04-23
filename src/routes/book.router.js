const { Router } = require('express');

const router = Router();

const book = require('../controllers/book.controller');
router.get('/', book.getAllBooks);
router.post('/', book.addBook);
router.get('/:id', book.getBookById);
router.put('/:id', book.updateBook);
router.delete('/:id', book.deleteBook);
router.post('/search', book.searchBook);

module.exports = router;