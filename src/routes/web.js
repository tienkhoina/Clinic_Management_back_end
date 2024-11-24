const express = require('express')
const router=express.Router()

const {checkLogin}= require("../controllers/userController")

router.post('/api/login',checkLogin)


module.exports=router