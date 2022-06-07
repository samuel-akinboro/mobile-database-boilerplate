const express = require('express');
const app = express();
const mongoose = require("mongoose");

// database connection
const mongoUri = "mongodb+srv://admin:admin123@cluster0.tyagn.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUri)
mongoose.connection.on('connected', ()=>{
  console.log('Connected to mongo instance')
})

mongoose.connection.on('error', (err)=>{
  console.error('Error connecting to mongo instance', err)
})

app.get("/", (req, res) => {
  res.send("Hello there")
})

app.listen(3000, ()=> console.log("server runing on port 3000"))