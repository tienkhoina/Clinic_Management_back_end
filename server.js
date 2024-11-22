const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const webRoutes = require("./routes/web");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';


app.listen(PORT,HOSTNAME, () => {
  console.log(`Server is running on hostname ${HOSTNAME}:${PORT}`);
});
