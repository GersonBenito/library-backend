const { response } = require("express");
const studentModel = require('../models/student.model');

const addStudent = async(req, res = response) =>{
    try {

        const student = req.body;
        await studentModel.save(student);

        return res.status(200).json({
            status: 200,
            message: 'student add success'
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: 400,
            message: 'ocurred an error trying add to student'
        });
    }
}

module.exports = {
    addStudent
}