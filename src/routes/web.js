const express = require('express')
const router=express.Router()

const {checkLogin,createUser}= require("../controllers/userController")
const {bookingAppointMent} = require('../controllers/bookingController')
router.post('/api/login',checkLogin)
router.post('/api/register',createUser)
router.post('/api/appointments',bookingAppointMent)

module.exports=router