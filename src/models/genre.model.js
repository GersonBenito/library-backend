const connection = require('../database/config');

const getAll = async() =>{
    const result = await connection.query('SELECT * FROM genre');
    return result.rows;
}

module.exports = {
    getAll
}