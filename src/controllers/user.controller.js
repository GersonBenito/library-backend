const { response } = require("express");
const userModel = require('../models/user.model');

const addUser = async(req, res = response) =>{
    try {

        const user = req.body;
        await userModel.save(user);

        return res.status(200).json({
            status: 200,
            message: 'user add success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'ocurred an error trying add to user'
        });
    }
}

const login = async (req, res = response) => {
    try {
        const { email } = req.body;
        const user = await userModel.find(email);
        if(!user){
            return res.status(400).json({
                status: 400,
                message: 'user not found'
            }); 
        }
        return res.status(200).json({
            status: 200,
            data: user,
            message: 'user loging success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'ocurred an error trying logged to user'
        });
    }
}

const getRole = async(_, res = response) =>{
    try {
        const roles = await userModel.getRole();

        return res.status(200).json({
            status: 200,
            data: roles,
            message: 'get roles success'
        }); 
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'ocurred an error trying get roles'
        });
    }
}

module.exports = {
    addUser,
    login,
    getRole
}