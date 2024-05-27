const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const userRoute = require('./src/routes/users')

const port = process.env.PORT || 5000; 

const app = express();
app.use(bodyParser.urlencoded());
app.use(userRoute)

app.get('/', (req, res) => {
    res.send('REST APIs')
  })
  

app.listen(port, () => {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.log('Error connecting to MongoDB:', error));
});
