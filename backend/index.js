const express=require('express')

const app=express()
const shipRoute=require('./router/router')
const cors=require('cors')
require('dotenv').config
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())




app.use('/user',shipRoute)

app.listen(5000,()=>{
    console.log('server is running')
})