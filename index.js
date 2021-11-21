const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.json());

// Routes
const noteRoute = require('./routes/noteRoute');
app.use('/', noteRoute);

// Connect DB
mongoose.connect(process.env.MONGODB_CONNECT, () => {
    console.log('Deez Nuts!');
})

app.listen(8888, () => {
    console.log('This Run on PORT 8888');
})