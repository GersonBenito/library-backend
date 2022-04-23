const connection = require('../database/config');

const save = async(book) =>{
    const { id_genre, title, author, published_year } = book;
    const results = await connection.query(
        'INSERT INTO book (id_genre, title, author, published_year) VALUES ($1, $2, $3, $4)', 
        [id_genre, title, author, published_year]
    )
    return results;
}

const getAll = async() =>{
    const results = await connection.query('SELECT * FROM book');
    return results.rows;
}

const getById = async(idBook) =>{
    const result = await connection.query('SELECT * FROM book WHERE id_book = $1', [idBook]);
    return result.rows[0];
}

const update = async (book, idBook) =>{
    const { id_genre, title, author, published_year } = book;
    const result = await connection.query(
        'UPDATE book set id_genre = $1, title = $2, author = $3, published_year = $4 WHERE id_book = $5',
        [id_genre, title, author, published_year, idBook]
    );
    return result;
}

const remove = async (idBook) =>{
    const result = await connection.query('DELETE book WHERE id_book = $1', [idBook]);
    return result;
}

const search = async (search) =>{
    const results = await connection.query('SELECT * FROM book WHERE title like $1 or author like $1', [`%${search}%`]);
    return results.rows;
}

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove,
    search
}