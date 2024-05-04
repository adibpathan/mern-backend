const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const app = express()
const PORT = 3000

app.get("/", (req, res)=>{
    res.send("hello bhai")
})

app.get("/instagram", (req, res)=>{
    res.send("i am instagram")
})

app.get("/twitter", (req, res)=>{
    res.send("i am twitter")
})

app.listen(process.env.PORT, ()=>{
    console.log("i am listening")
})