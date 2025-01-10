const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
const connectDB = async()=>{
    try{
        mongoose.connect(
      "mongodb+srv://aarish:aarish12345@cluster0.6025x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("mongodb connected")
    }catch(error){
        console.log(error.message)
    }

}

app.get('/add-todo',(req,res)=>{
    res.status(200).json({message:"Hello from json server  "})
})

connectDB()
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})