const mongoose = require("mongoose")


const connectDB = async () => {

    try{
        //mongoose.set('strictQuery', false)
       await mongoose.connect(process.env.URI,{useNewUrlParser:true})
       console.log(`db connected to ${mongoose.connection.host}`)
    }
    catch(e)
    {
       console.log(`Server error ${e}`)
    }
}

module.exports = connectDB