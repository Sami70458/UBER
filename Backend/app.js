const dotenv = require('dotenv'); //npm i dotenv 
dotenv.config();
const express = require('express'); //npm i express
const cors = require('cors'); //npm i cors
const app = express();

app.use(cors());

app.get('/', (req,res) => {
    res.send('Hello World'); 
 });


 module.exports = app;