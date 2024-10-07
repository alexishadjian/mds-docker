const express = require('express');
const app = express();
const port = 3001;

const mongoose = require("mongoose");
mongoose.connect('mongodb://mongo/f1-timer');

app.use(express.urlencoded());
app.use(express.json());

// const userRoute = require('./routes/userRoute');
// app.use('/users', userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})