// require express
const express = require('express')
const { Db } = require('mongodb')

// instance express 
app = express()

//env config 
require('dotenv').config()

//port 
const port = process.env.Port

//connection Db
const connectDB = require('./config/connectDB')
connectDB()
// prety view json
app.use(express.json()) 
//require routes
const router = require('./route/user')
app.use('/user',router)



//create server
app.listen(port,error =>{
    error?console.log(error)
    :console.log(`Runing in ${port}` )
})

