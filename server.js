const express = require("express")
const connectDB = require("./config/db")
const router = require("./routes/productRoute")
const dotenv = require("dotenv")


const app = express()

dotenv.config()

connectDB()

app.use(express.json()) //for parsing incoming requests with json payloads
app.use('/api/v1',router)


app.listen(process.env.PORT,()=>{
    console.log("server working")
})