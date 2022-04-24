const { response } = require('express');
const genreModel = require('../models/genre.model');

const getAllGenres = async(req, res = response) =>{
    try {
        const genres = await genreModel.getAll();

        return res.status(200).json({
            status: 200,
            data: genres,
            message: 'get genres success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'error to get genres'
        });
    }
}

module.exports = {
    getAllGenres
}