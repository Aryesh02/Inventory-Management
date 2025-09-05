const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');
const addcomponentsRoute = require('./routes/addcomponents');
const newcomponentRoute = require('./routes/newcomponent');
const allcomponentsRoute = require('./routes/allcomponents')

const app = express()

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err.message));

app.use('/login', loginRoute)
app.use('/signup', signupRoute)
app.use('/addcomponents', addcomponentsRoute)
app.use('/newcomponent', newcomponentRoute)
app.use('/allcomponents', allcomponentsRoute)

app.listen(8000, () => {
    console.log("Server Listening on Port 8000.")
})