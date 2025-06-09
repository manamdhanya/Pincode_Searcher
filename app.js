const express = require('express');
const cookieParser = require('cookie-parser');
const {connect} = require('./connect')
const mongoose = require('mongoose')

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

connect('mongodb://localhost:27017/userDB-auth')
.then(()=>{
  console.log('Database Connected')
})
.catch(()=>{
  console.log('ERROR IN CONNECTING')
})

app.set('view engine', 'ejs');

const userRoute = require("./routes/user");

app.use("/", userRoute);

app.listen(5001, () => {
  console.log('Server is listening....');
});
