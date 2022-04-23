const connection = require('../database/config');

const save = async(student) =>{
    const { id_role, firstName, lastName, email } = student;
    const results = await connection.query(`INSERT INTO users (id_role, firstName, lastName, email) VALUES ($1, $2, $3, $4)`, [id_role, firstName, lastName, email]);
    return results;
}

module.exports = {
    save,
}