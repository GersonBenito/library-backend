const connection = require('../database/config');

const save = async(student) =>{
    const { id_role, firstName, lastName, email } = student;
    const results = await connection.query(`INSERT INTO users (id_role, firstName, lastName, email) VALUES ($1, $2, $3, $4)`, [id_role, firstName, lastName, email]);
    return results;
}

const find = async (email) =>{
    const result = await connection.query(
        `
            select us.id_user, us.id_role, us.firstname, us.lastname, us.email, r.role from users us
            inner join role r
            on us.id_role = r.id_role
            where email = $1
        `,[email]
    );
    return result.rows[0];
}

const getRole = async() =>{
    const resuls = await connection.query('SELECT * FROM role');
    return resuls.rows;
}

module.exports = {
    save,
    find,
    getRole,
}