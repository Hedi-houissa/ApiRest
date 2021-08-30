// require mongoose
const mongoose = require("mongoose");

//URI cluster

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
          console.log('data base connected ')
        
    } catch (error) {
        console.log("can note connect to the data base ")
    }
 
}

module.exports = connectDB;
