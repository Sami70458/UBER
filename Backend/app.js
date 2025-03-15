const dotenv = require('dotenv'); //npm i dotenv 
dotenv.config();
const express = require('express'); //npm i express
const cors = require('cors'); //npm i cors
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req,res) => {
    res.send('Hello World'); 
 });

app.use('/users', userRoutes);

 module.exports = app;