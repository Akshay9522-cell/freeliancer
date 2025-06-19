const express=require('express')
const route=express.Router()

const shipController=require('../controller/controller')



route.post('/create',shipController.createShipment)





module.exports=route