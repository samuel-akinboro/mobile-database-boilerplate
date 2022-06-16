require('./models/User')
const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoute');
const bodyParser = require('body-parser');

// port 
const PORT = 3000;

// initialize app
const app = express();

// middleware
app.use(bodyParser.json())
app.use(authRoute)

// database connection
const mongoUri = "mongodb+srv://admin:admin123@cluster0.tyagn.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUri);
mongoose.connection.on('connected', ()=> console.log('connected to database'))
mongoose.connection.on('error', (err)=> console.error("Error connecting to database", err))

app.get('/', (req, res)=> {
  res.send("working")
})

app.listen(PORT, ()=> console.log('server running on port ' + PORT))