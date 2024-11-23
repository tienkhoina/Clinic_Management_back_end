const express = require('express');
const connectDB  = require('./src/config/database.js')
const path = require('path');
require('dotenv').config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

connectDB()

app.listen(PORT,HOSTNAME, () => {
  console.log(`Server is running on hostname ${HOSTNAME}:${PORT}`);
});
