const { handleUserLogin } = require('../services/user-services');
const { hashPassword, createNewUser, getAllUser, getUserById, updateUserData, deleteUserById } = require('../services/CRUDservices')
const { splitFullName } = require('../algorithm/algorithm')
const db = require('../models/index');



let bookingAppointMent = async (req, res) => {
    console.log(req.body);
}

module.exports = { bookingAppointMent }