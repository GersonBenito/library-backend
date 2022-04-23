const { response } = require('express');
const bookModel = require('../models/book.model');

const addBook = async(req, res = response) =>{
    try {

        const book = req.body;
        await bookModel.save(book);

        return res.status(200).json({
            status: 200,
            message: 'book add success'
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: 400,
            message: 'error to add book'
        });
    }
}

const getAllBooks = async(req, res = response) =>{
    try {

        const books = await bookModel.getAll();

        return res.status(200).json({
            status: 200,
            data: books,
            message: 'get all books success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'error to get books'
        });
    }
}

const getBookById = async(req, res = response) =>{
    try {

        const id = req.params.id;
        const book = await bookModel.getById(id);

        return res.status(200).json({
            status: 200,
            data: book,
            message: 'get book success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'error to get book'
        });
    }
}

const updateBook = async(req, res = response) =>{
    try {

        const book = req.body;
        const id = req.params.id;
        await bookModel.update(book, id);

        return res.status(200).json({
            status: 200,
            message: 'update book success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'error to update book'
        });
    }
}

const deleteBook = async(req, res = response) =>{
    try {

        const id = req.params.id;
        await bookModel.remove(id);

        return res.status(200).json({
            status: 200,
            message: 'delete book success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'error to delete book'
        });
    }
}

const searchBook = async (req, res = response) => {
    try {
        const { search } = req.body;
        const books = await bookModel.search(search);

        return res.status(200).json({
            status: 200,
            data: books,
            message: 'search book success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'error to search book'
        });
    }
}

module.exports = {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
    searchBook
}