const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Node app is running on port ${port}`);
});

//CONNECT TO DATABASE
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://mxthew95:deader5@mycluster.5fkzr.mongodb.net/car-rentals?retryWrites=true&w=majority'

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    console.log('Connected to DB!')
})
.catch((err) => {
    console.log(err)
})

//ROUTES
const Car = require('./models/car')

app.get('/', (req,res) => {
    res.send('Home!')
})

app.get('/cars', (req,res) => {
    Car.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
})

//MIDDLEWARES





 