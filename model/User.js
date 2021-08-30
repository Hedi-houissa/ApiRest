// require mongoose
const mongoose=require('mongoose')

// import schema
const {Schema}=mongoose

//create user
const userschema = new Schema({
    firstname : String,
    lastname :String,
    age : Number
})

module.exports = User = mongoose.model('user',userschema)